import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


const ChartsPage = ({ data, show, }) => {

    const consumption = [
        data.sixthTotalConsumption/10000000,
        data.fifthTotalConsumption/10000000,
        data.fourthTotalConsumption/10000000,
        data.thirdTotalConsumption/10000000,
        data.secondTotalConsumption/10000000,
        data.firstTotalConsumption/10000000,
    ]
    const amount = [
        data.sixthTotalBill/10000000,
        data.fifthTotalBill/10000000,
        data.fourthTotalBill/10000000,
        data.thirdTotalBill/10000000,
        data.secondTotalBill/10000000,
        data.firstTotalBill/10000000,
    ]
    let state;
    if (show === 'Consumption') {
        state = {
            dataLine: {
                labels: ['JUN','JUL','AUG','SEP','OCT','NOV'],
                datasets: [
                    {
                        label: 'Cr kWh',
                        fill: true,
                        lineTension: 0,
                        backgroundColor: "rgba(225, 204,230, .3)",
                        borderColor: "rgb(205, 130, 158)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "green",
                        pointBackgroundColor: "rgb(255, 255, 255)",
                        pointBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointHoverBackgroundColor: "floralwhite",
                        pointHoverBorderColor: "rgba(220, 220, 220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 2,
                        pointHitRadius: 5,
                        data: consumption
                    }
                ]
            }
        };
    } else {
        state = {
            dataLine: {
                labels: ['JUN','JUL','AUG','SEP','OCT','NOV'],
                datasets: [
                    {
                        label: 'Cr Rs',
                        fill: true,
                        lineTension: 0,
                        backgroundColor: "rgba(225, 204,230, .3)",
                        borderColor: "rgb(205, 130, 158)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "green",
                        pointBackgroundColor: "rgb(255, 255, 255)",
                        pointBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointHoverBackgroundColor: "floralwhite",
                        pointHoverBorderColor: "rgba(220, 220, 220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 2,
                        pointHitRadius: 5,
                        data: amount
                    }
                ]
            }
        };


    }



    return (
        <>
            <div className='container pt-3 pb-4 '>
                <MDBContainer>
                    <h1 className="contact-text">{show} History</h1>
                    <div className="displayGraph">
                        <Line data={state.dataLine} options={{ responsive: true }} />
                    </div>
                </MDBContainer>
            </div>
        </>
    );
}


export default ChartsPage;