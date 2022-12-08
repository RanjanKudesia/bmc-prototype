import BeforeLogin from "../../BeforeLogin/BeforeLogin"
import MonthlyDetailsTable from "./MonthlyDetailsTable/MonthlyDetailsTable"

function MonthlyDetails(data, existingUser) {
    
    return (
        <>
            {
                existingUser ?
                    <>
                        <section className="container" id='login-section'>
                            <div className="container py-5 h-100">
                                <h1 className='d-flex justify-content-center mb-3'>Monthly Details</h1>
                                <MonthlyDetailsTable list={data} />
                            </div>
                        </section>
                    </>
                    :
                    <BeforeLogin />
            }
        </>
    )
}

export default MonthlyDetails;