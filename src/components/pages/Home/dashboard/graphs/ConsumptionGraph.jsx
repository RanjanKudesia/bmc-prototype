import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


const ChartsPage = ({ data, show, }) => {

    const consumption = [
        data.sixthTotalConsumption,
        data.fifthTotalConsumption,
        data.fourthTotalConsumption,
        data.thirdTotalConsumption,
        data.secondTotalConsumption,
        data.firstTotalConsumption,
    ]
    const amount = [
        data.sixthTotalBill,
        data.fifthTotalBill,
        data.fourthTotalBill,
        data.thirdTotalBill,
        data.secondTotalBill,
        data.firstTotalBill,
    ]
    let state;
    if (show === 'Consumption') {
        state = {
            dataLine: {
                labels: ['June','July','August','September','October','November'],
                datasets: [
                    {
                        label: show,
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
                labels: ['June','July','August','September','October','November'],
                datasets: [
                    {
                        label: show,
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