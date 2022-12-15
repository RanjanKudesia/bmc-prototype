import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


const ChartsPage = ({ data, type }) => {

    const { plus5, minus5, zeroLT, plus5MDSL, minus5MDSL } = data;

    const state = {
        dataDoughnut: {
            labels: ['Energy Variation +5', 'Energy Variation -5', 'Zero Energy Consumption', 'MD>SL by +20%', 'MD>SL by -10%'],
            datasets: [
                {
                    data: [plus5, minus5, zeroLT, plus5MDSL, minus5MDSL],
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
        <MDBContainer className="chart-size">
            <h3 className="mt-5">{type} chart</h3>
            <Doughnut data={state.dataDoughnut} options={{ responsive: true }} />
        </MDBContainer>
    );

}

export default ChartsPage;