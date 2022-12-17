import { useState } from 'react';
import BeforeLogin from "../../BeforeLogin/BeforeLogin"
import MonthlyDetailsTable from "./MonthlyDetailsTable/MonthlyDetailsTable"
import DownloadButton from './DownloadButton';



function MonthlyDetails({ data, existingUser }) {

    const [list, setList] = useState('fifth');


    return (
        <>
            {
                existingUser ?
                    <>

                        <div className='container'>
                            <h1 className='d-flex justify-content-center mb-3'>Current Month Details</h1>
                            <div className='d-flex justify-content-center'>

                                <div className="form-floating mt-3 mb-3 " id="floatingSelect-listType">
                                    <select className="form-select" onChange={(event) => { setList(event.target.value) }} defaultValue={'fifth'}>
                                        <option key={0} value={'zero'}>LT Connections with Energy Variations of +5%</option>
                                        <option key={1} value={'first'}>LT Connections with Energy Variations of -5%</option>
                                        <option key={2} value={'second'}>LT Connections with zero Energy Consumption:</option>
                                        <option key={3} value={'third'}>LT Connections with MD{'>'}SL by +20%</option>
                                        <option key={4} value={'fourth'}>LT Connections with SL{'>'}MD by +10%</option>
                                        <option key={5} value={'fifth'}>Total live LT Connections</option>
                                        <option key={6} value={'sixth'}>LT Connections with power-factor less than 0.8</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Specific Connections</label>
                                </div>
                            </div>
                            <div className=' d-flex justify-content-center'>
                                <DownloadButton data={data} list={list} />
                            </div>
                        <MonthlyDetailsTable data={data} list={list} />
                        </div>
                    </>
                    :
                    <BeforeLogin />
            }
        </>
    )
}

export default MonthlyDetails;