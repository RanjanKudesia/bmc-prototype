import { doc, getDoc } from "firebase/firestore";
import { db } from './FirebaseConfig';
import locationData from "./data/locationData";


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
        const { first, second, third, fourth, fifth, sixth } = data;



        let updatedFirst = []

        for (let i = 0; i < first.length; i++) {

            const t = locationData.find((x) => {
                return (x.connection_number === first[i].accountId);
            })

            const s = second.find((x) => {
                return (x.accountId === first[i].accountId);
            })

            let o = first.find((x) => {
                return (x.accountId === first[i].accountId);
            })

            if (s) {
                o.previousMonthConsumption = parseInt(s.totalConsumption);
                if (parseInt(s.totalConsumption)) {
                    o.percentageVariation = parseInt(((parseInt(o.totalConsumption) - parseInt(s.totalConsumption)) / parseInt(s.totalConsumption)) * 100);
                } else if (!parseInt(s.totalConsumption) && parseInt(o.totalConsumption)) {
                    o.percentageVariation = parseInt(o.totalConsumption);
                }
            } else {
                o.previousMonthConsumption = '';
                o.percentageVariation = 'NaN';
            }

            if (t) {
                o.latitude = t.latitude;
                o.longitude = t.longitude;
            }
            else {
                o.latitude = '';
                o.longitude = '';
            }

            updatedFirst.push(o);
        }


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
            totalPowerFactorLessThan8List = [],
            PowerFactorLessThan8TotalWeldingCharge = 0,
            firstTotalConsumption = 0,
            firstTotalBill = 0,
            secondTotalConsumption = 0,
            secondTotalBill = 0,
            thirdTotalConsumption = 0,
            thirdTotalBill = 0,
            fourthTotalConsumption = 0,
            fourthTotalBill = 0,
            fifthTotalConsumption = 0,
            fifthTotalBill = 0,
            sixthTotalConsumption = 0,
            sixthTotalBill = 0,
            totalFirstWithPDC = 0;
        ;

        for (let i = 0; i < totalConnections; i++) {
            totalLoad += parseInt(updatedFirst[i].maxDemand);
            totalEnergy += parseInt(updatedFirst[i].totalConsumption);
            totalBill += parseInt(updatedFirst[i].totalAmountAfterDueDate);
            if (updatedFirst[i].billType === 'PDC') {
                totalFirstWithPDC++;
            }
            if (0 < parseFloat(updatedFirst[i].powerFactor) && parseFloat(updatedFirst[i].powerFactor) < 0.8) {
                totalPowerFactorLessThan8++;
                totalPowerFactorLessThan8List.push(updatedFirst[i]);
                PowerFactorLessThan8TotalWeldingCharge += parseFloat(updatedFirst[i].weldingSurcharge);
            }
            surchargePayableOnDelay += parseInt(updatedFirst[i].latePayCharge);


            let currentMaxDemand = parseInt(updatedFirst[i].maxDemand);
            let currentSanctionedLoad = parseInt(first[i].sanctionLoad.slice(0, -2));

            if ((((currentMaxDemand - currentSanctionedLoad) / currentSanctionedLoad * 100) > 20)) {
                plus5MDSL++;
                plus5MDSLList.push(updatedFirst[i]);
            } else if ((((currentSanctionedLoad - currentMaxDemand) / currentSanctionedLoad * 100) > 10)) {
                minus5MDSL++;
                minus5MDSLList.push(updatedFirst[i]);
            }

        }


        //todo:For the Graph
        firstTotalConsumption = totalEnergy;
        firstTotalBill = totalBill;
        for (let i = 0; i < second.length; i++) {
            secondTotalConsumption += parseInt(second[i].totalConsumption);
            secondTotalBill += parseInt(second[i].totalAmountAfterDueDate);
        }
        for (let i = 0; i < third.length; i++) {
            thirdTotalConsumption += parseInt(third[i].totalConsumption);
            thirdTotalBill += parseInt(third[i].totalAmountAfterDueDate);
        }
        for (let i = 0; i < fourth.length; i++) {
            fourthTotalConsumption += parseInt(fourth[i].totalConsumption);
            fourthTotalBill += parseInt(fourth[i].totalAmountAfterDueDate);
        }
        for (let i = 0; i < fifth.length; i++) {
            fifthTotalConsumption += parseInt(fifth[i].totalConsumption);
            fifthTotalBill += parseInt(fifth[i].totalAmountAfterDueDate);
        }
        for (let i = 0; i < sixth.length; i++) {
            sixthTotalConsumption += parseInt(sixth[i].totalConsumption);
            sixthTotalBill += parseInt(sixth[i].totalAmountAfterDueDate);
        }



        let plus5 = 0,
            minus5 = 0,
            zeroLT = 0,
            zeroLTFixedCharge = 0,
            zeroLTSecurityAmountDeposit = 0
            ;

        for (let i = 0; i < updatedFirst.length; i++) {
            if (!parseInt(updatedFirst[i].totalConsumption)) {
                zeroLT++;
                zeroLTList.push(updatedFirst[i]);
                zeroLTFixedCharge += parseFloat(updatedFirst[i].fixedCharge);
                zeroLTSecurityAmountDeposit += parseFloat(updatedFirst[i].securityAmountDeposit);
            }
        }

        for (let i = 0; i < second.length; i++) {
            const thisMonthAccountData = updatedFirst.find((x) => {
                return x.accountId === second[i].accountId;
            })
            const previousMonthAccountData = second[i];
            if (thisMonthAccountData) {
                if ((parseInt(thisMonthAccountData.totalConsumption) > parseInt(previousMonthAccountData.totalConsumption)) && parseInt(previousMonthAccountData.totalConsumption) !== 0) {
                    const result = ((parseFloat(thisMonthAccountData.totalConsumption) - parseFloat(previousMonthAccountData.totalConsumption)) / parseFloat(previousMonthAccountData.totalConsumption)) * 100;
                    if (result >= 5) {
                        plus5++;
                        plus5List.push(thisMonthAccountData);
                    }
                }
                else if (!parseInt(previousMonthAccountData.totalConsumption) && parseInt(thisMonthAccountData.totalConsumption)) {
                    plus5++;
                    plus5List.push(thisMonthAccountData);
                }
                else if (parseFloat(thisMonthAccountData.totalConsumption) && parseFloat(previousMonthAccountData.totalConsumption) && parseFloat(thisMonthAccountData.totalConsumption) > parseFloat(previousMonthAccountData.totalConsumption)) {
                    const result = ((parseFloat(previousMonthAccountData.totalConsumption) - parseFloat(thisMonthAccountData.totalConsumption)) / parseFloat(previousMonthAccountData.totalConsumption)) * 100;
                    if ((result) >= 5) {
                        minus5++;
                        minus5List.push(thisMonthAccountData);
                    }
                } else if (parseFloat(previousMonthAccountData.totalConsumption) && !parseFloat(thisMonthAccountData.totalConsumption)) {
                    minus5++;
                    minus5List.push(thisMonthAccountData);
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
            PowerFactorLessThan8TotalWeldingCharge,
            surchargePayableOnDelay,
            plus5List,
            minus5List,
            plus5MDSLList,
            minus5MDSLList,
            zeroLTList,
            totalPowerFactorLessThan8List,
            zeroLTFixedCharge,
            zeroLTSecurityAmountDeposit,
            firstTotalConsumption,
            secondTotalConsumption,
            thirdTotalConsumption,
            fourthTotalConsumption,
            fifthTotalConsumption,
            sixthTotalConsumption,
            firstTotalBill,
            secondTotalBill,
            thirdTotalBill,
            fourthTotalBill,
            fifthTotalBill,
            sixthTotalBill,
            updatedFirst,
            first,
            second,
            third,
            fourth,
            fifth,
            sixth,
            totalFirstWithPDC
        }
    } catch (error) {
        console.error('Error', error.message);
    }
}


export { sortedData };
