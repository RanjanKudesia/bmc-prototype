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
                        <section className="container vh-100">
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
                            <button id='show-graph-button' className="btn btn-outline-success " type="button" data-bs-toggle="collapse" data-bs-target="#graph" aria-expanded="false" aria-controls="collapseWidthExample">
                                Show Graph
                            </button>
                            <p>
                                <div id='graph' className='collapse collapse-horizontal'>
                                    <ConsumptionGraph data={data} connectionNumber={connectionNumberOption} />
                                </div>
                                <ul class="list-group graph-details-consumption">
                                    <li className="fs-5 bg-secondary text-white list-group-item">Consumption</li>
                                    <li className="list-group-item">Average: {average.toString().slice(0, 7)}</li>
                                    <li class="list-group-item">Maximum: {maximum.toString().slice(0, 7)}</li>
                                    <li class="list-group-item">Minimum: {minimum.toString().slice(0, 7)}</li>
                                    {/* <li class="list-group-item">Amount:</li> */}
                                </ul>
                                <ul class="list-group graph-details-amount">
                                    <li className="fs-5 bg-secondary text-white list-group-item">Amount</li>
                                    <li className="list-group-item">Average: {average.toString().slice(0, 7)}</li>
                                    <li class="list-group-item">Maximum: {maximum.toString().slice(0, 7)}</li>
                                    <li class="list-group-item">Minimum: {minimum.toString().slice(0, 7)}</li>
                                    {/* <li class="list-group-item">Amount:</li> */}
                                </ul>
                            </p>
                        
                    </section>
                    :
                    <section className="container vh-100" id='login-section'>
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