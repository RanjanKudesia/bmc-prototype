import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Brush,
    AreaChart,
    Area
} from "recharts";
import data from '../../data/dummy data.json';


export default function SynchronizedLineChart ({connectionNumber}) {


    function selectiveData(connectionNumber) {
        let information = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i]["Connection Number"] === connectionNumber) {
                information.push(data[i]);
            }
        }

        return information;
    }

    console.log(selectiveData(connectionNumber))

    return (
        <div>
            <h4>Consumption</h4>
            <LineChart
                width={1000}
                height={300}
                data={selectiveData(connectionNumber)}
                syncId="anyId"
                margin={{
                    top: 50,
                    right: 30,
                    left: 100,
                    bottom: 20
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Reading Date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Consumption" stroke="#8884d8" fill="#8884d8" />
                <Brush />
            </LineChart>
            <p>Current Reading</p>
            <LineChart
                width={1000}
                height={300}
                data={selectiveData(connectionNumber)}
                syncId="anyId"
                margin={{
                    top: 50,
                    right: 30,
                    left: 100,
                    bottom: 20
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Reading Date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Current Reading" stroke="#82ca9d" fill="#82ca9d" />
                <Brush />
            </LineChart>
                <p>Amount</p>
            <AreaChart
                width={1000}
                height={300}
                data={selectiveData(connectionNumber)}
                syncId="anyId"
                margin={{
                    top: 50,
                    right: 30,
                    left: 100,
                    bottom: 20
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nameReading Date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Amount" stroke="#82ca9d" fill="#82ca9d" />
                <Brush />
            </AreaChart>
        </div>
    );
}
