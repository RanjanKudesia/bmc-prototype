import BeforeLogin from './../../BeforeLogin/BeforeLogin';
import DetailsHome from './DetailsHome/DetailsHome';
import { Link } from 'react-router-dom';

function Home({ existingUser }) {

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
                                    <h2><span className=" p-3 mb-4">OPTIMIZATION OF POWER BILL</span></h2>
                                </div>

                                {/* //*: For Month and Year */}
                                <div className="d-flex justify-content-evenly mt-3 mb-5">
                                    <h3><span className="">Date:{date}</span></h3>
                                    {/* <h3><span className="badge bg-secondary ">Year:{new Date().getFullYear()}</span></h3> */}
                                </div>

                                {/* //*:DATA */}
                                <div className="d-flex flex-row justify-content-center">

                                    <div className='col-md-4 p-2 '>
                                        <h3><span className=" badge bg-secondary">Total Connections: 2600</span></h3>
                                        <h3><span className=" badge bg-secondary">Total Load: 2323KW</span></h3>
                                        <h3><span className=" badge bg-secondary">Total Energy: 4500KW</span></h3>
                                    </div>
                                    <div className='p-2 col-md-4 offset-md-4'>
                                        <div className='mb-2'><button className="btn btn-secondary "><Link className='contact-text-link fw-bold fs-5' to='analysis'>Analysis</Link></button></div>
                                        <div className='mt-2'><button className="btn btn-secondary "><Link className='contact-text-link fw-bold fs-5' to='commercial'>Commercial</Link></button></div>
                                    </div>

                                </div>

                                <div className="d-flex flex-column mt-5 justify-content-center align-content-center mb-3 flex-wrap">
                                    <DetailsHome />
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