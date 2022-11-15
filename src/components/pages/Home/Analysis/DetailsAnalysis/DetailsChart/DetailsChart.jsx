import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


const ChartsPage = ({ type }) => {
    const state = {
        dataDoughnut: {
            labels: ['Energy Variation +5', 'Energy Variation -5', 'Zero Energy Consumption', 'MD>CD by +5%', 'MD>CD by -5%'],
            datasets: [
                {
                    data: [205, 306, 250, 222, 189],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                    hoverBackgroundColor: [
                        "#FF5A5E",
                        "#5AD3D1",
                        "#FFC870",
                        "#A8B3C5",
                        "#616774"
                    ]
                }
            ]
        }
    }


    return (
        <MDBContainer>
            {/* <MDBContainer className="mb-5 pb-5 w-50"> */}
            <h3 className="mt-5">{type} chart</h3>
            <Doughnut data={state.dataDoughnut} options={{ responsive: true }} />
        </MDBContainer>
    );

}

export default ChartsPage;