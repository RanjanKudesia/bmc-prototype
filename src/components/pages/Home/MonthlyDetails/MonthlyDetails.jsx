import { useState } from 'react';
import BeforeLogin from "../../BeforeLogin/BeforeLogin"
import MonthlyDetailsTable from "./MonthlyDetailsTable/MonthlyDetailsTable"

function MonthlyDetails({ data, existingUser }) {

    const { plus5List, minus5List, zeroLTList, plus5MDSLList, minus5MDSLList } = data;

    const listType = [plus5List, minus5List, zeroLTList, plus5MDSLList, minus5MDSLList];
    const [list, setList] = useState(0);



    return (
        <>
            {
                existingUser ?
                    <>

                        <div className='container'>
                            <h1 className='d-flex justify-content-center mb-3'>Current Month Details</h1>
                            <div className='d-flex justify-content-center'>

                                <div className="form-floating mt-3 mb-3 " id="floatingSelect-listType">
                                    <select className="form-select" onChange={(event) => { setList(event.target.value) }} defaultValue={0}>
                                        <option value={0}>LT Number of Connections with Energy Variations of +5%</option>
                                        <option value={1}>LT Number of Connections with Energy Variations of -5%</option>
                                        <option value={2}>LT Number of Connections with zero Energy Consumption:</option>
                                        <option value={3}>Number of Connections with MD{'>'}SL by +20%</option>
                                        <option value={4}>Number of Connections with SL{'>'}MD by +10%</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Area</label>
                                </div>
                            </div>
                            {/* <div className='d-flex justify-content-center'></div> */}
                            <div className='d-flex justify-content-center'>
                                <MonthlyDetailsTable list={listType[list]} />
                            </div>
                        </div>

                    </>
                    :
                    <BeforeLogin />
            }
        </>
    )
}

export default MonthlyDetails;