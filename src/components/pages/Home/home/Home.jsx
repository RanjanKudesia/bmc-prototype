import { useState } from 'react';
import BeforeLogin from './../../BeforeLogin/BeforeLogin';
import DetailsHome from './DetailsHome/DetailsHome';
import { Link } from 'react-router-dom';


function Home({ data, existingUser }) {
    
        var {first,second} = data;
    
    // const [thisMonthData, setThisMonthData] = useState(data.first);
    // const [previousMonthData, setPreviousMonthData] = useState(data.second);
    console.log(data)
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
                                <div class="d-flex justify-content-center">
                                    <h2><span className=" p-4 mb-4">ELECTRIC SECTION</span></h2>
                                </div>

                                {/* //*: Optimization of Power Bill */}
                                <div class="d-flex justify-content-center">
                                    <h2><span className=" mb-4">POWER BILL OPTIMIZATION</span></h2>
                                </div>

                                {/* //*: For Month and Year */}
                                <div className="d-flex justify-content-evenly mt-3 mb-5">
                                    <h3><span className="">Date:{date}</span></h3>
                                    {/* <h3><span className="badge bg-secondary ">Year:{new Date().getFullYear()}</span></h3> */}
                                </div>

                                {/* //*:DATA */}
                                <div className="d-flex flex-row justify-content-center">

                                    <table style={{ width: '15rem' }} className=" table table-responsive table-borderless">

                                        <tbody>
                                            <tr>
                                                <td className='bg-secondary'><h4><span className=" badge bg-secondary">Total Connections: 2600</span></h4></td>
                                                <th scope="col"><button className="btn btn-secondary "><Link className='contact-text-link fw-bold fs-5' to='/analysisPage'>Analysis</Link></button></th>
                                            </tr>
                                            <tr>

                                                <td className='bg-secondary'><h4><span className=" badge bg-secondary">Total Load: 2323KW</span></h4></td>
                                                <td><button className="btn btn-secondary "><Link className='contact-text-link fw-bold fs-5' to='/commercial'>Commercial</Link></button></td>


                                            </tr>
                                            <tr>

                                                <td className='bg-secondary'><h4><span className=" badge bg-secondary">Total Energy: 4500KW</span></h4></td>

                                            </tr>
                                        </tbody>
                                    </table>




                                </div>

                                <div className="d-flex flex-column mt-5 justify-content-center align-content-center mb-3 flex-wrap">
                                    <DetailsHome thisMonthData={first} previousMonthData={second} />
                                </div>
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