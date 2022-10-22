import { useState } from 'react';
import ConsumptionGraph from './graphs/ConsumptionGraph';
import data from '../data/dummy data.json';

const connectionNumberSequence = [
    'N55468',
    'N55469',
    'N55470',
    'N55471',
    'N55472',
    'N55473',
    'N55474',
    'N55475',
    'N55476',
    'N55477',
]

const BMCNumber = [
    'BMC-1',
    'BMC-2',
    'BMC-3',
    'BMC-4',
    'BMC-5',
    'BMC-6',
    'BMC-7',
    'BMC-8',
    'BMC-9',
    'BMC-10',
]




let average, maximum = 0, maximumDate, minimum = 10000;

export default function DashBoard({ existingUser }) {

    const [BMCNumberOption, setBMCNumberOption] = useState('');
    const [connectionNumberOption, setConnectionNumberOption] = useState(null);
    const [show, setShow] = useState('Consumption');
    const [width, setWidth] = useState(900);
    const [height, setHeight] = useState(400);

    function handleOnSelectMBCNumber(event) {
        setBMCNumberOption(event.target.value);
    }

    function handleOnSelectConnectionNumber(event) {
        setConnectionNumberOption(event.target.value);
    }


    function selectiveData(connectionNumberOption) {
        let information = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i]["Connection Number"] === connectionNumberOption) {
                information.push(data[i]);
            }
        }

        return information;
    }

    function setDetails(connectionNumberOption) {
        let data = selectiveData(connectionNumberOption);
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i].Consumption;
            if (maximum < data[i].Consumption) {
                maximum = data[i].Consumption;
                maximumDate = data[i]["Reading Date"];
            }
            if (minimum > data[i].Consumption) {
                minimum = data[i].Consumption;
                // minimumDate=data[i]["Reading Date"];
            }
        }

        average = sum / data.length;

    }

    setDetails(connectionNumberOption)


    return (
        <>
            {
                existingUser ?
                    <section className="container" id='login-section'>
                        <div className="container py-5 h-100">

                            {/* This is for selecting BMC number */}
                            <div className="form-floating mt-3" id="floatingSelect-bmc">
                                <select className="form-select" aria-label="Floating label select example" onChange={handleOnSelectMBCNumber} defaultValue={'none'}>
                                    <option value="none">Select an Option</option>
                                    {
                                        BMCNumber.map(seq => {
                                            return (
                                                <>
                                                    <option key={seq} value={seq}>{seq}</option>
                                                </>
                                            );
                                        })
                                    }
                                </select>
                                <label htmlFor="floatingSelect">BMC Number</label>
                            </div>
                            {/* This is for selecting Connection number */}
                            <div className="form-floating mt-3" id="floatingSelect-connection">
                                <select className="form-select" aria-label="Floating label select example" onChange={handleOnSelectConnectionNumber} defaultValue={'none'}>
                                    <option value="none">Select an Option</option>
                                    {
                                        connectionNumberSequence.map(seq => {
                                            return (
                                                <>
                                                    <option key={seq} value={seq}>{seq}</option>
                                                </>
                                            );
                                        })
                                    }
                                </select>
                                <label htmlFor="floatingSelect">Connection-Number</label>
                            </div>
                            <div class="d-flex justify-content-center align-items-center flex-row ">
                                <button onClick={(e) => setShow('Consumption')} id='show-graph-button' className="p-2 btn btn-outline-success my-3 " type="button" >
                                    Show Consumption Graph
                                </button>

                                <button onClick={(e) => setShow('Amount')} id='show-graph-button' className="p-2 btn my-3 " type="button" >
                                    Show Amount Graph
                                </button>
                            </div>
                            <div className='container-fluid'>
                                <div class="d-flex flex-row mb-3">
                                    <div class=" p-2 d-flex flex-column mt-3">
                                        {/* This is for consumption */}
                                        <ul class="p-2 list-group graph-details">
                                            <li className="fs-5 bg-secondary text-white list-group-item">Consumption</li>
                                            <li className="list-group-item">Average: {average.toString().slice(0, 7)}</li>
                                            <li className="list-group-item">Maximum: {maximum.toString().slice(0, 7)}</li>
                                            <li className="list-group-item">Minimum: {minimum.toString().slice(0, 7)}</li>
                                        </ul>
                                        {/* This is for amount */}
                                        <ul className="p-2 list-group graph-details">
                                            <li className="fs-5 bg-secondary text-white list-group-item">Amount</li>
                                            <li className="list-group-item">Average: {average.toString().slice(0, 7)}</li>
                                            <li className="list-group-item">Maximum: {maximum.toString().slice(0, 7)}</li>
                                            <li className="list-group-item">Minimum: {minimum.toString().slice(0, 7)}</li>
                                        </ul>
                                        {/* This is for other details */}
                                        <ul className="p-2 list-group graph-details">
                                            <li className="fs-5 bg-secondary text-white list-group-item">Other Details</li>
                                            <li className="list-group-item">Power Factor: {average.toString().slice(0, 7)}</li>
                                            <li className="list-group-item">Sanctioned Load: {maximum.toString().slice(0, 7)}</li>
                                            <li className="list-group-item">Current Reading: {minimum.toString().slice(0, 7)}</li>
                                        </ul>
                                    </div>

                                    <div className='p-2 d-flex justify-content-end align-items-center'>
                                        <div id='graph' className='card'>
                                            <div className='card-body'>
                                                <ConsumptionGraph
                                                    width={width}
                                                    height={height}
                                                    data={data}
                                                    show={show}
                                                    connectionNumber={connectionNumberOption}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    :
                    <section className="container" id='login-section'>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                    <div className="alert alert-success shadow-2-strong" id='login-card'>
                                        <div className="card-body p-5 text-center">
                                            <h1 className="m-5">Please login to see details</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </>
    );
}