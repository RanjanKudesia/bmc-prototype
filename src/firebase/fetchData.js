import { doc, getDoc } from "firebase/firestore";
import { db } from './FirebaseConfig';

async function sortSequenceData() {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() - 1;


    let startYear = currentYear;
    let previousYearStartMonth = 12;
    let thisYearStartMonth = currentMonth - 5;

    if (currentMonth < 5) {
        this.previousYearStartMonth = 7 - (currentMonth);
        this.startYear--;
        this.thisYearStartMonth = 0;
    }

    let dataSequence = [];
    for (let i = currentMonth; i >= thisYearStartMonth; i--) {
        const month_year = months[i] + '-' + startYear.toString();
        dataSequence.push(month_year);
    }

    for (let i = previousYearStartMonth; i <= 11; i++) {
        const month_year = months[i] + '-' + currentYear.toString();
        dataSequence.push(month_year);
    }

    return dataSequence;
}

async function getSixMonthsData() {
    try {
        let data = {};
        const dataSequence = await sortSequenceData();
        let firstMonthData = await getSpecificMonthData(dataSequence[0]);
        let secondMonthData = await getSpecificMonthData(dataSequence[1]);
        let thirdMonthData = await getSpecificMonthData(dataSequence[2]);
        let fourthMonthData = await getSpecificMonthData(dataSequence[3]);
        let fifthMonthData = await getSpecificMonthData(dataSequence[4]);
        let sixthMonthData = await getSpecificMonthData(dataSequence[5]);
        data.first = firstMonthData;
        data.second = secondMonthData;
        data.third = thirdMonthData;
        data.fourth = fourthMonthData;
        data.fifth = fifthMonthData;
        data.sixth = sixthMonthData;
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    }

}



async function getSpecificMonthData(month_year) {
    try {

        // const data = await convert(filePath);
        const docRef1 = doc(db, month_year, "firstPart-LT");
        const docRef2 = doc(db, month_year, "secondPart-LT");
        const docRef3 = doc(db, month_year, "thirdPart-LT");
        const docRef4 = doc(db, month_year, "fourthPart-LT");
        const docSnap1 = await getDoc(docRef1);
        const docSnap2 = await getDoc(docRef2);
        const docSnap3 = await getDoc(docRef3);
        const docSnap4 = await getDoc(docRef4);

        if (docSnap1.exists() && docSnap2.exists() && docSnap3.exists() && docSnap4.exists()) {
            // console.log("Document data:", docSnap.data());
            // return docSnap.data();
            const result = [];
            result.push(...docSnap1.data().allowedData1);
            result.push(...docSnap2.data().allowedData2);
            result.push(...docSnap3.data().allowedData3);
            result.push(...docSnap4.data().allowedData4);
            return result;
        } else {
            console.log("No such document!");
        }
    } catch (e) {
        console.error('Error:', e.message);
    }
}

async function sortedData() {
    try {
        const data = await getSixMonthsData();
        const { first, second, third, fourth, fifth } = data;

        const totalConnections = first.length;
        let totalLoad = 0,
            totalEnergy = 0,
            totalBill = 0,
            plus5MDSL = 0,
            minus5MDSL = 0,
            totalPowerFactorLessThan8 = 0,
            surchargePayableOnDelay = 0,
            plus5List = [],
            minus5List = [],
            plus5MDSLList = [],
            minus5MDSLList = [],
            zeroLTList = [],
            totalPowerFactorLessThan8List = []
            ;

        for (let i = 0; i < totalConnections; i++) {
            totalLoad += parseInt(first[i].maxDemand);
            totalEnergy += parseInt(first[i].totalConsumption);
            totalBill += parseInt(first[i].totalAmountAfterDueDate);
            if (parseInt(first[i].powerFactor) < 0.8) {
                totalPowerFactorLessThan8++;
                totalPowerFactorLessThan8List.push(first[i]);
            }
            surchargePayableOnDelay += parseInt(first[i].latePayCharge);


            let currentMaxDemand = parseInt(first[i].maxDemand);
            let currentSanctionedLoad = parseInt(first[i].sanctionLoad.slice(0, -2));
            if ((((currentMaxDemand - currentSanctionedLoad) / currentSanctionedLoad * 100) > 5)) {
                plus5MDSL++;
                plus5MDSLList.push(first[i]);
            } else if ((((currentSanctionedLoad - currentMaxDemand) / currentSanctionedLoad * 100) > 5)) {
                minus5MDSL++;
                minus5MDSLList.push(first[i]);
            }

        }


        let plus5 = 0,
            minus5 = 0,
            zeroLT = 0;


        for (let i = 0; i < second.length; i++) {
            const thisMonthAccountData = first.find((x) => {
                return x.accountId === second[i].accountId;
            })
            const previousMonthAccountData = second[i];
            if (!thisMonthAccountData) {
                continue;
            } else {
                if (parseInt(thisMonthAccountData.totalConsumption) === 0) {
                    zeroLT++;
                    zeroLTList.push(first[i]);
                }
                if ((parseFloat(thisMonthAccountData.totalConsumption) > parseFloat(previousMonthAccountData.totalConsumption))) {
                    const result = ((parseFloat(thisMonthAccountData.totalConsumption) - parseFloat(previousMonthAccountData.totalConsumption)) / parseFloat(previousMonthAccountData.totalConsumption)) * 100;
                    if ((result) >= 5) {
                        plus5++;
                        plus5List.push(first[i]);
                    }
                } else {
                    const result = ((parseFloat(previousMonthAccountData.totalConsumption) > parseFloat(thisMonthAccountData.totalConsumption)) / parseFloat(previousMonthAccountData.totalConsumption)) * 100;
                    if ((result) >= 5) {
                        minus5++;
                        minus5List.push(first[i]);
                    }
                }
            }
        }
        return {
            totalEnergy,
            totalLoad,
            totalConnections,
            plus5,
            minus5,
            zeroLT,
            totalBill,
            plus5MDSL,
            minus5MDSL,
            totalPowerFactorLessThan8,
            surchargePayableOnDelay,
            plus5List,
            minus5List,
            plus5MDSLList,
            minus5MDSLList,
            zeroLTList,
            totalPowerFactorLessThan8List,
        }
    } catch (error) {
        console.error('Error', error.message);
    }
}


export { sortedData };
