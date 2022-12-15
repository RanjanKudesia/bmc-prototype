import { useState } from 'react';
import ConsumptionGraph from './graphs/ConsumptionGraph';
import BeforeLogin from '../../BeforeLogin/BeforeLogin';








export default function DashBoard({ data,existingUser }) {

    const [show, setShow] = useState('Billing');

    return (
        <>
            {
                existingUser ?
                    <section className="container" id='login-section'>
                        <div className="container py-5 h-100">

                            <div className='container d-flex justify-content-center'>
                                    <div className="form-floating mt-3" id="floatingSelect-connection">
                                        <select className="form-select" aria-label="Floating label select example" onChange={(e) => setShow(e.target.value)} defaultValue={'Billing'}>
                                            <option value={'Billing'}>Total Billing Graph</option>
                                            <option value={'Consumption'}>Total Consumption Graph</option>
                                        </select>
                                        <label htmlFor="floatingSelect">LT</label>
                                    </div>
                                {/* </div> */}


                            </div>



                            <div className='graph mt-4'>
                                <ConsumptionGraph
                                    data={data}
                                    show={show}
                                />
                            </div>


                            {/* <div className='d-flex justify-content-center'>
                                <table id='analysis-table' className=" table table-responsive table-hover border border-secondary table-striped mt-4">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='fs-4 bg-secondary text-white'>Details</th>
                                            <th scope="col" className='fs-4 bg-secondary text-white'>Consumption</th>
                                            <th scope="col" className='fs-4 bg-secondary text-white'>Amount</th>
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
                            </div> */}

                            {/* <div className='d-flex justify-content-center'>
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
                            </div> */}

                        </div>
                    </section>
                    :
                    <BeforeLogin />
            }
        </>
    );
}