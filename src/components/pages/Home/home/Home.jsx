import { useState } from 'react';
import BeforeLogin from './../../BeforeLogin/BeforeLogin';
import DetailsHome from './DetailsHome/DetailsHome';
import { Link } from 'react-router-dom';
import { CSVLink } from "react-csv";
import DashBoard from './../dashboard/DashBoard';
import MonthDataTable from './MonthDataDetails/MonthDataTable';
import MonthDataChart from './MonthDataDetails/MonthDataChart';

function Home({ data, existingUser }) {

    const { first, totalConnections, totalEnergy, totalLoad } = data;

    const [state, setState] = useState();
    const [connectionNumber, setConnectionNumber] = useState();

    function handleChange(event) {
        setState(event.target.value);
    }


    function handleConnectionNumber(event) {
        event.preventDefault();
        const properNumber = first.find((x) => {
            return (x.accountId === state);
        })
        if (properNumber) {
            setConnectionNumber(properNumber);
            console.log(connectionNumber)
        } else {
            alert('Please enter a valid IVRS Number');
        }

    }

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    const date = (' ' + d.getDate()) + ' ' + month[d.getMonth()] + ' ' + d.getFullYear();

    return (
        <>
            {
                existingUser ?
                    <>
                        <section className="container" id='login-section'>
                            <div className="container py-5 h-100">
                                {/* //*: Heading */}
                                <div className="d-flex justify-content-center">
                                    <h2><span className=" p-4 mb-4">ELECTRIC SECTION</span></h2>
                                </div>


                                <div className="d-flex justify-content-center">
                                    <h2><span className=" mb-4">POWER BILL OPTIMIZATION</span></h2>
                                </div>


                                <div className="d-flex justify-content-evenly mt-3 mb-5">
                                    <h3><span className="">Date:{date}</span></h3>

                                </div>

                                {/* //*:DATA */}
                                <div className="d-flex flex-row justify-content-center">

                                    <table style={{ width: '15rem' }} className=" table table-responsive table-bordered">

                                        <tbody>
                                            <tr>
                                                <td className='bg-secondary'><h4><span className=" badge bg-secondary">Total Connections:</span></h4></td>
                                                <td className='bg-secondary'><h4><span className=" badge bg-secondary">{totalConnections}</span></h4></td>
                                                {/* <td><button className="btn btn-secondary "><Link className='contact-text-link fw-bold fs-5' to='/analysisPage'>Analysis</Link></button></td> */}
                                            </tr>
                                            <tr>

                                                <td className='bg-secondary'><h4><span className=" badge bg-secondary">Total Load:</span></h4></td>
                                                <td className='bg-secondary'><h4><span className=" badge bg-secondary">{totalLoad} kW</span></h4></td>
                                                {/* <td><button className="btn btn-secondary "><Link className='contact-text-link fw-bold fs-5' to='/commercial'>Commercial</Link></button></td> */}


                                            </tr>
                                            <tr>

                                                <td className='bg-secondary'><h4><span className=" badge bg-secondary">Total Energy:</span></h4></td>
                                                <td className='bg-secondary'><h4><span className=" badge bg-secondary">{totalEnergy} kWh</span></h4></td>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div className="d-flex flex-row justify-content-center align-content-center">

                                    <table style={{ width: '15rem' }} className=" table table-responsive table-borderless">

                                        <tbody>
                                            <tr>
                                                <td><button className="btn btn-secondary "><Link className='contact-text-link fw-bold fs-5' to='/commercial'>Commercial</Link></button></td>
                                                <td><button className="btn btn-secondary "><Link className='contact-text-link fw-bold fs-5' to='/analysisPage'>Analysis</Link></button></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                                <div className="d-flex flex-column mt-5 justify-content-center align-content-center mb-3 flex-wrap">
                                    <DetailsHome data={data} />
                                </div>

                                <DashBoard data={data} existingUser={existingUser} />

                                <div className=' d-flex justify-content-center'>
                                    <CSVLink className='btn btn-secondary' data={first}>Download {first[0].billMonthYear} File</CSVLink>
                                </div>

                                <div className='container d-flex justify-content-center mt-5'>
                                    <form onSubmit={handleConnectionNumber}>
                                        <div className="mb-3">
                                            <label htmlFor="connectionNumber" className="form-label d-flex justify-content-center"><h3>Fill IVRS Number</h3></label>
                                            <input autoCapitalize="character" type="text" className="form-control" id="connectionNumber" value={state || ''} onChange={handleChange} />
                                            <div className='d-flex justify-content-center mt-3'>
                                                <button type="submit" className="btn btn-secondary d-flex align-content-center">Show Details</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {
                                    connectionNumber ?
                                        <div className='graph mt-4 mb-4'>
                                            <MonthDataChart data={data} x={connectionNumber} />
                                        </div>
                                        :
                                        null
                                }
                                {
                                    connectionNumber ?
                                        <div className='container graph mt-4 pt-1 pb-2'>
                                            <div className='graph mt-4'>
                                                <h1 className="contact-text d-flex justify-content-center">{connectionNumber.accountId} Full Details</h1>
                                                <MonthDataTable x={connectionNumber} list={first} />
                                            </div>
                                        </div>
                                        :
                                        null
                                }

                            </div>
                        </section>
                    </>
                    :
                    <BeforeLogin />
            }
        </>
    )
}

export default Home;