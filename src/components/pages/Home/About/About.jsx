import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <section className="container" id='login-section'>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" id='login-card'>
                                <div className="card-body p-5 text-center">
                                    <h1 className="mb-5" style={{ color: '#fd5f00' }}>About</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;