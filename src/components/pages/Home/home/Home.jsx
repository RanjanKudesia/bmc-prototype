

function Home({ existingUser }) {
    return (
        <>
            {
                existingUser ?
                    <>
                        <div className="container">
                            <h1 className="alert alert-danger text-xl">
                                <p className="home">Home</p>
                            </h1>
                        </div>
                    </>
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
    )
}

export default Home;