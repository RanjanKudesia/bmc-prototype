import { useState } from 'react';
import ConsumptionGraph from './graphs/ConsumptionGraph';
import data from '../data/dummy data.json';
import { Link } from 'react-router-dom';

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
    const [connectionNumberOption, setConnectionNumberOption] = useState('N55468');
    const [show, setShow] = useState('Consumption');

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

                            <div className='container d-flex justify-content-center'>

                                {/* This is for selecting BMC number */}
                                <div className="form-floating mt-3" id="floatingSelect-bmc">
                                    <select className="form-select" aria-label="Floating label select example" onChange={(event) => { setBMCNumberOption(event.target.value) }} defaultValue={'none'}>
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
                                    <label htmlFor="floatingSelect">Area</label>

                                    {/* This is for selecting Connection number */}
                                    <div className="form-floating mt-3" id="floatingSelect-connection">
                                        <select className="form-select" aria-label="Floating label select example" onChange={(event) => { setConnectionNumberOption(event.target.value) }} defaultValue={'N55468'}>
                                            <option value="N55468">N55468</option>
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

                                    {/* This is for selecting Connection number */}
                                    <div className="form-floating mt-3" id="floatingSelect-connection">
                                        <select className="form-select" aria-label="Floating label select example" onChange={(e) => setShow(e.target.value)} defaultValue={'Consumption'}>
                                            <option value={'Consumption'}>Show Consumption Graph</option>
                                            <option value={'Amount'}>Show Amount Graph</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Connection-Number</label>
                                    </div>
                                </div>


                            </div>



                            <div className='graph mt-4'>
                                <ConsumptionGraph
                                    data={selectiveData(connectionNumberOption)}
                                    show={show}
                                    connectionNumber={connectionNumberOption}
                                />
                            </div>


                            <div className='d-flex justify-content-center'>
                                <table id='analysis-table' className=" table table-responsive table-hover border border-secondary table-striped mt-4">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='fs-4 bg-secondary text-white'>Details</th>
                                            <th scope="col" className='fs-4 bg-secondary text-white'>Consumption</th>
                                            <th scope="col" className='fs-4 bg-secondary text-white'>Amount</th>
                                            {/* <th scope="col">Other Details</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className='fs-4' scope="row">Average</th>
                                            <td className='fs-4'>{average.toString().slice(0, 7)}</td>
                                            <td className='fs-4'>1205</td>
                                        </tr>
                                        <tr>
                                            <th className='fs-4' scope="row">Maximum</th>
                                            <td className='fs-4'>{maximum.toString().slice(0, 7)}</td>
                                            <td className='fs-4'>5000</td>
                                        </tr>
                                        <tr>
                                            <th className='fs-4' scope="row">Minimum</th>
                                            <td className='fs-4'>{minimum.toString().slice(0, 7)}</td>
                                            <td className='fs-4'>1200</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <table id='analysis-table' className=" table table-responsive table-hover border border-secondary table-striped mt-4">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='fs-4 bg-secondary text-white'>Other Details</th>
                                            <th scope="col" className='fs-4 bg-secondary text-white'>Values</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className='fs-4' scope="row">Power Factor</th>
                                            <td className='fs-4'>5</td>
                                        </tr>
                                        <tr>
                                            <th className='fs-4' scope="row">Sanctioned Load</th>
                                            <td className='fs-4'>{maximum.toString().slice(0, 7)}</td>
                                        </tr>
                                        <tr>
                                            <th className='fs-4' scope="row">Current Reading</th>
                                            <td className='fs-4'>{minimum.toString().slice(0, 7)}</td>
                                        </tr>
                                    </tbody>
                                </table>
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
                                            <h1 className="m-5 contact-text">Please <Link to={'login'}><a > login </a></Link> to see details</h1>
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