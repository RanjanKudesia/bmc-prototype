import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


const ChartsPage = ({ connectionNumber, data, show, }) => {

    const date = data.map((x) => { return x["Reading Date"] });
    const content = data.map((x) => { return x[show] });


    let average, maximum = 0, maximumDate, minimum = 10000, area = '';

    function selectiveData(connectionNumber) {
        let information = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i]["Connection Number"] === connectionNumber) {
                information.push(data[i]);
            }
        }

        return information;
    }



    function setDetails(connectionNumber) {
        let data = selectiveData(connectionNumber);
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i].Consumption;
            if (maximum < data[i].show) {
                maximum = data[i].show;
                maximumDate = data[i]["Reading Date"];
            }
            if (minimum > data[i].show) {
                minimum = data[i].show;
                // minimumDate = data[i]["Reading Date"];
            }
        }

        area = data[0].Address;
    }

    if (connectionNumber) {
        setDetails(connectionNumber)
    }

    const state = {
        dataLine: {
            labels: date,
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
                    data: content
                }
            ]
        }
    };

    return (
        <>
            <div className='container pt-3 pb-4 '>
                <MDBContainer>
                    <div className=" fs-4 mt-2 mb-3 d-flex justify-content-left align-items-center flex-row contact-text">Connection number :&nbsp;{connectionNumber ? connectionNumber : <>Not selected </>},</div>
                    <div className=" fs-4 mt-2 mb-3 d-flex justify-content-left align-items-center flex-row contact-text">Address : {area ? area : <>Bhopal</>}</div>
                    <div className="displayGraph">
                        <Line data={state.dataLine} options={{ responsive: true }} />
                    </div>
                </MDBContainer>
            </div>
        </>
    );
}


export default ChartsPage;