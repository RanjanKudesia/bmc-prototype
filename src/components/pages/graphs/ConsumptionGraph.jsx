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
import data from '../../data/dummy data.json';

export default function ConsumptionGraph({ connectionNumber }) {


    function selectiveData(connectionNumber) {
        let information = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i]["Connection Number"] === connectionNumber) {
                information.push(data[i]);
            }
        }

        return information;
    }

    // console.log(selectiveData(connectionNumber))


    return (
        <LineChart
            width={800}
            height={300}
            data={selectiveData(connectionNumber)}
            margin={{
                top: 20,
                right: 50,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Reading Date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine x="06/30/2022" stroke="blue" label="Max PV PAGE" />
            <ReferenceLine y={230} label="Max" stroke="green" />
            <Line type="monotone" dataKey="Consumption" stroke="#8884d8" />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
    );
}
