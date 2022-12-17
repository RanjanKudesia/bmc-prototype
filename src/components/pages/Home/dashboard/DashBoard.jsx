import { useState } from 'react';
import ConsumptionGraph from './graphs/ConsumptionGraph';
import BeforeLogin from '../../BeforeLogin/BeforeLogin';








export default function DashBoard({ data, existingUser }) {

    const [show, setShow] = useState('Billing');

    return (
        <>
            {
                existingUser ?
                    <>
                        <div className='container'>


                            <div className='container d-flex justify-content-center'>
                                <div className="form-floating mt-3" id="floatingSelect-connection">
                                    <select className="form-select" aria-label="Floating label select example" onChange={(e) => setShow(e.target.value)} defaultValue={'Billing'}>
                                        <option value={'Billing'}>Total Billing Graph</option>
                                        <option value={'Consumption'}>Total Consumption Graph</option>
                                    </select>
                                    <label htmlFor="floatingSelect">LT</label>
                                </div>



                            </div>

                            <div className='graph mt-4'>
                                <ConsumptionGraph
                                    data={data}
                                    show={show}
                                />
                            </div>

                        </div>
                    </>
                    :
                    <BeforeLogin />
            }
        </>
    );
}