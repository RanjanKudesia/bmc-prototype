import DetailsAnalysis from './DetailsAnalysis/DetailsAnalysis';
import DetailsChart from './DetailsAnalysis/DetailsChart/DetailsChart';
import BeforeLogin from './../../BeforeLogin/BeforeLogin';

function AnalysisPage({ data, existingUser }) {

    const { plus5, minus5, zeroLT } = data;

    return (
        <>
            {
                existingUser ?
                    <>
                        <section className="container" id='login-section'>
                            <div className="container py-5 h-100">

                                {/* <div className="d-flex justify-content-center">
                                <DetailsAnalysis type='HT' />
                                </div>
                                <DetailsChart type='HT' /> */}


                                <div className="d-flex justify-content-center mt-5">
                                    <DetailsAnalysis data={data} type='LT' />
                                </div>
                                <DetailsChart data={data} type='LT' />


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