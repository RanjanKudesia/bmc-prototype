import { useState } from 'react'

function DetailsAnalysis({ type }) {

    const [one, setOne] = useState(2);
    const [two, setTwo] = useState(2);
    const [three, setThree] = useState(2);
    const [four, setFour] = useState(2);
    const [five, setFive] = useState(2);

    return (
        <>
            <div className="container-sm">
                <table className="table table-secondary table-striped border border-secondary">

                    <thead>
                        <tr>
                            <th scope="col">{type}</th>
                            <th scope="col">Variation%</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>Number of Connections with Energy Variations +5:</td>
                            <td><div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {one}%
                                </button>
                                <ul className="dropdown-menu">
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
                            </div></td>
                            <td><div className="vl"></div></td>
                            <td>1000</td>
                        </tr>

                        <tr>
                            <td>Number of Connections with Energy Variations -5:</td>
                            <td><div className="dropdown">
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
                            </div></td>
                            <td><div className="vl"></div></td>
                            <td>1000</td>
                        </tr>

                        <tr>
                            {/* <th scope="row">2</th> */}
                            <td>Number of Connections with zero energy Consumption:</td>
                            <td><div className="dropdown">
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
                            </div></td>
                            <td><div className="vl"></div></td>
                            <td>1056</td>
                        </tr>

                        <tr>
                            {/* <th scope="row">2</th> */}
                            <td>Number of Connections with MD{'>'}CD by +5%:</td>
                            <td><div className="dropdown">
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
                            </div></td>
                            <td><div className="vl"></div></td>
                            <td>1056</td>
                        </tr>

                        <tr>
                            {/* <th scope="row">2</th> */}
                            <td>Number of Connections with MD{'>'}CD by -5%:</td>
                            <td><div className="dropdown">
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
                            </div></td>
                            <td><div className="vl"></div></td>
                            <td>1056</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DetailsAnalysis