import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


function MonthDataChart({ data, x }) {

    const { second, third, fourth, fifth, sixth } = data;
    const one = x;

    const two = second.find((y) => {
        return (y.accountId === x.accountId);
    });
    const three = third.find((y) => {
        return (y.accountId === x.accountId);
    });
    const four = fourth.find((y) => {
        return (y.accountId === x.accountId);
    });
    const five = fifth.find((y) => {
        return (y.accountId === x.accountId);
    });
    const six = sixth.find((y) => {
        return (y.accountId === x.accountId);
    });

    const state = {
        dataLine: {
            labels: ['June', 'July', 'August', 'September', 'October', 'November'],
            datasets: [
                {
                    label: 'Consumption',
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
                    data: [
                        six.totalConsumption,
                        five.totalConsumption,
                        four.totalConsumption,
                        three.totalConsumption,
                        two.totalConsumption,
                        one.totalConsumption
                    ]
                }
            ]
        }
    };

    return (
        <>
            <div className='container pt-3 pb-4 '>
                <MDBContainer className="p-3">
                    <h1 className="contact-text d-flex justify-content-center">{x.accountId}: Consumption History</h1>
                    <div className="displayGraph">
                        <Line data={state.dataLine} options={{ responsive: true }} />
                    </div>
                </MDBContainer>
            </div>
        </>
    )
}

export default MonthDataChart;




