

function Contact() {
    return (
        <>

            <section className="container-xxl" id='login-section'>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" id='login-card'>
                                <div className="contact-form card-body p-5 text-center">
                                    <h2 className="mb-2">Contact Us</h2>
                                    <p className="fs-4"> Please send your message below. We will get back to you at the earliest! </p>
                                    <form >
                                        <div className="row">
                                            <div className="col-sm-12 form-group">
                                                <label className="form-label fs-5 mb-1" htmlFor="message"> Message:</label>
                                                <textarea className="form-control mb-2" type="textarea" name="message" id="message" maxLength={"6000"} rows="7"></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="col-sm-6 form-group">
                                                <label className="form-label fs-5 mb-1" htmlFor="name"> Your Name:
                                                    <input type="text" className="form-control" id="name" name="name" required />
                                                </label>
                                            </div>
                                            <div class="col-sm-6 form-group">
                                                <label className="form-label fs-5 mb-1" htmlFor="email"> Email:
                                                    <input type="email" className="form-control" id="email" name="email" required />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 form-group">
                                                <button type="submit" className="mt-2 btn btn-lg btn-success" >Send </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;