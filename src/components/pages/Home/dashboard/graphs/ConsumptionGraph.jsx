import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine
} from "recharts";


function ConsumptionGraph({ connectionNumber, data, show, width, height }) {

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
                // minimumDate=data[i]["Reading Date"];
            }
        }

        area = data[0].Address;
        average = sum / data.length;

    }

    if (connectionNumber) {
        setDetails(connectionNumber)
    }



    return (
        <>
            {
                <>
                    <div className="container">
                        <div className="fs-3 ms-2 alert alert-dark">Connection number :&nbsp;{connectionNumber ? connectionNumber : <>Not selected </>},&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address : {area ? area : <>Bhopal</>}</div>
                        <LineChart
                            width={width}
                            height={height}
                            data={selectiveData(connectionNumber)}
                            margin={{
                                top: 20,
                                right: 40,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Reading Date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <ReferenceLine x={maximumDate} stroke="green" label="" />
                            <ReferenceLine y={average} label="" stroke="red" />
                            <Line type="monotone" dataKey={show} stroke="#8884d8" />
                            <Line type="monotone" dataKey="Maximum" stroke="green" />
                            <Line type="monotone" dataKey="Average" stroke="red" />
                        </LineChart>
                    </div>
                </>
            }

        </>
    );
}


export default ConsumptionGraph;

