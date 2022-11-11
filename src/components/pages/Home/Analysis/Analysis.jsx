import DetailsAnalysis from './DetailsAnalysis/DetailsAnalysis';
import BeforeLogin from './../../BeforeLogin/BeforeLogin';

function AnalysisPage({ existingUser }) {
    return (
        <>
            {
                existingUser ?
                    <>
                        <section className="container" id='login-section'>
                            <div className="container py-5 h-100">
                                <DetailsAnalysis />
                                <DetailsAnalysis />
                            </div>
                        </section>
                    </>
                    :
                    <BeforeLogin />
            }
        </>
    )
}

export default AnalysisPage;