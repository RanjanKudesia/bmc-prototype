import CommercialDetails from './CommercialDetails/CommercialDetails';
// import DashBoard from './../dashboard/DashBoard';
import BeforeLogin from './../../BeforeLogin/BeforeLogin';

function Commercial({ data, existingUser }) {
    return (
        <>
            {
                existingUser ?
                    <>
                        <section className="container" id='login-section'>
                            <div className="container py-5 h-100">
                                <h1 className='d-flex justify-content-center mb-3'>Commercial Details</h1>
                                <CommercialDetails data={data} />
                            </div>
                        </section>
                    </>
                    :
                    <BeforeLogin />
            }
        </>
    )
}

export default Commercial;