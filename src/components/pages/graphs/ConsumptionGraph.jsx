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

    let average, maximum = 0,maximumDate,minimum=10000;

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
            if(maximum<data[i].Consumption)
            {
                maximum=data[i].Consumption;
                maximumDate=data[i]["Reading Date"];
            }
            if(minimum>data[i].Consumption)
            {
                minimum = data[i].Consumption;
                // minimumDate=data[i]["Reading Date"];
            }
        }
        
        average = sum / data.length;

    }

    setDetails(connectionNumber)
    console.log(average,maximum,minimum);
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
            <ReferenceLine x={maximumDate} stroke="blue" label="" />
            <ReferenceLine y={average} label="" stroke="green" />
            <Line type="monotone" dataKey="Consumption" stroke="#8884d8" />
            <Line type="monotone" dataKey="Maximum" stroke="blue" />
            <Line type="monotone" dataKey="Average" stroke="green" />
        </LineChart>
    );
}
