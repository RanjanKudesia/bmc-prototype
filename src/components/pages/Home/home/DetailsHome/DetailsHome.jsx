
function DetailsHome({ data }) {

    const { plus5, minus5, zeroLT } = data;

    return (
        <>
            <div className="container d-flex justify-content-center">
                <table id='analysis-table' className="table table-secondary table-striped border border-secondary">
                    <tbody>

                        {/* <tr>
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
                        </tr> */}

                        <tr>
                            <td className='fs-4'>LT Number of Connections with Energy Variations of +5%:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{plus5}</td>
                        </tr>

                        <tr>
                            {/* <th scope="row">3</th> */}
                            <td className='fs-4'>LT Number of Connections with Energy Variations of -5%:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{minus5}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>LT Number of Connections with zero energy Consumption:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{zeroLT}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DetailsHome;