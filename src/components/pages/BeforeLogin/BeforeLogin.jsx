import {Link} from 'react-router-dom';

export default function BeforeLogin() {
    return (
        <section className="container" id='login-section'>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="alert alert-success shadow-2-strong " id='login-card'>
                            <div className="card-body p-5 text-center">
                                <h1 className="m-5 contact-text">Please <Link className='contact-text-link' to={'/login'}>login</Link> to see details</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
