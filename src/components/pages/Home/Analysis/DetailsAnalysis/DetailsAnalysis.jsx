import { useState } from 'react'

function DetailsAnalysis({ type }) {

    // const []

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
                                    %
                                </button>
                                <ul className="dropdown-menu">
                                    <li className='dropdown-item'>1</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>2</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>3</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>4</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>5</li>
                                </ul>
                            </div></td>
                            <td><div className="vl"></div></td>
                            <td>1000</td>
                        </tr>

                        <tr>
                            <td>Number of Connections with Energy Variations -5:</td>
                            <td><div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    %
                                </button>
                                <ul className="dropdown-menu">
                                    <li className='dropdown-item'>1</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>2</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>3</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>4</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>5</li>
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
                                    %
                                </button>
                                <ul className="dropdown-menu">
                                    <li className='dropdown-item'>1</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>2</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>3</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>4</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>5</li>
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
                                    %
                                </button>
                                <ul className="dropdown-menu">
                                    <li className='dropdown-item'>1</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>2</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>3</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>4</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>5</li>
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
                                    %
                                </button>
                                <ul className="dropdown-menu">
                                    <li className='dropdown-item'>1</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>2</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>3</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>4</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li className='dropdown-item'>5</li>
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