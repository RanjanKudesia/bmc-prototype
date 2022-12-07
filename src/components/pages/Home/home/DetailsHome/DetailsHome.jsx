import { useState } from 'react';

function DetailsHome({ thisMonthData, previousMonthData }) {

    const [one, setOne] = useState(2);
    const [two, setTwo] = useState(2);
    const [three, setThree] = useState(2);
    const [four, setFour] = useState(2);
    const [five, setFive] = useState(2);
    const [six, setSix] = useState(2);
    const [showPlus5,setShowPlus5] = useState(Number);
    const [showMinus5,setShowMinus5] = useState(Number);
    const [showZero,setShowZero] = useState(Number);

    function sortLT() {

        const p = new Promise((resolve, reject) => {
            let plus5 = 0, minus5 = 0, zero = 0;
            for (let i = 0; i < previousMonthData.length; i++) {
                const thisMonthAccountData = thisMonthData.find((x) => {
                    return x.accountId === previousMonthData[i].accountId;
                })
                const previousMonthAccountData = previousMonthData[i];
                if (!thisMonthAccountData) {
                    continue;
                } else {
                    if (parseInt(thisMonthAccountData.totalConsumption) === 0) {
                        zero++;
                    }
                    if ((parseFloat(thisMonthAccountData.totalConsumption) > parseFloat(previousMonthAccountData.totalConsumption))) {
                        const result = ((parseFloat(thisMonthAccountData.totalConsumption) - parseFloat(previousMonthAccountData.totalConsumption)) / parseFloat(previousMonthAccountData.totalConsumption)) * 100;
                        if ((result) >= 5) {
                            plus5++;
                        }
                    } else {
                        const result = ((parseFloat(previousMonthAccountData.totalConsumption) > parseFloat(thisMonthAccountData.totalConsumption)) / parseFloat(previousMonthAccountData.totalConsumption)) * 100;
                        if ((result) >= 5) {
                            minus5++;
                        }
                    }
                }
            }

            if (plus5) {
                resolve({ plus5, minus5, zero });
            } else {
                reject(new Error('There is no variation'))
            }

        })

        p.then((response) => {
            setShowPlus5(response.plus5);
            setShowMinus5(response.minus5);
            setShowZero(response.zero);
            console.log('plus5:',response.plus5);
            console.log('minus5',response.minus5);
            console.log('zero:',response.zero);
        }).catch(error => {
            console.error('Error:', error.message);
        })


    }
    sortLT();

    return (
        <>
            <div className="container d-flex justify-content-center">
                <table id='analysis-table' className="table table-secondary table-striped border border-secondary">
                    {/* <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead> */}
                    <tbody>

                        <tr>
                            <td className='fs-4'>HT Number of Connections with Energy Variations +5%:</td>
                            <td className='fs-4'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {one}%
                                    </button>
                                    <ul className="dropdown-menu ">
                                        <li onClick={() => { setOne(1) }} className='dropdown-item'>1</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setOne(2) }} className='dropdown-item'>2</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setOne(3) }} className='dropdown-item'>3</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setOne(4) }} className='dropdown-item'>4</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setOne(5) }} className='dropdown-item'>5</li>
                                    </ul>
                                </div>
                            </td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>1000</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>HT Number of Connections with Energy Variations -5%:</td>
                            <td className='fs-4'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {two}%
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li onClick={() => { setTwo(1) }} className='dropdown-item'>1</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setTwo(2) }} className='dropdown-item'>2</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setTwo(3) }} className='dropdown-item'>3</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setTwo(4) }} className='dropdown-item'>4</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setTwo(5) }} className='dropdown-item'>5</li>
                                    </ul>
                                </div>
                            </td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>1000</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>HT Number of Connections with zero energy Consumption:</td>
                            <td className='fs-4'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {three}%
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li onClick={() => { setThree(1) }} className='dropdown-item'>1</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setThree(2) }} className='dropdown-item'>2</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setThree(3) }} className='dropdown-item'>3</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setThree(4) }} className='dropdown-item'>4</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setThree(5) }} className='dropdown-item'>5</li>
                                    </ul>
                                </div>
                            </td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>1056</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>LT Number of Connections with Energy Variations of +5%:</td>
                            <td className='fs-4'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {four}%
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li onClick={() => { setFour(1) }} className='dropdown-item'>1</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setFour(2) }} className='dropdown-item'>2</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setFour(3) }} className='dropdown-item'>3</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setFour(4) }} className='dropdown-item'>4</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setFour(5) }} className='dropdown-item'>5</li>
                                    </ul>
                                </div>
                            </td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{showPlus5}</td>
                        </tr>

                        <tr>
                            {/* <th scope="row">3</th> */}
                            <td className='fs-4'>LT Number of Connections with Energy Variations of -5%:</td>
                            <td className='fs-4'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {five}%
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li onClick={() => { setFive(1) }} className='dropdown-item'>1</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setFive(2) }} className='dropdown-item'>2</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setFive(3) }} className='dropdown-item'>3</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setFive(4) }} className='dropdown-item'>4</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setFive(5) }} className='dropdown-item'>5</li>
                                    </ul>
                                </div>
                            </td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{showMinus5}</td>
                        </tr>

                        <tr>
                            {/* <th scope="row">3</th> */}
                            <td className='fs-4'>LT Number of Connections with zero energy Consumption:</td>
                            <td className='fs-4'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {six}%
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li onClick={() => { setSix(1) }} className='dropdown-item'>1</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setSix(2) }} className='dropdown-item'>2</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setSix(3) }} className='dropdown-item'>3</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setTwo(4) }} className='dropdown-item'>4</li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li onClick={() => { setSix(5) }} className='dropdown-item'>5</li>
                                    </ul>
                                </div>
                            </td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{showZero}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DetailsHome;