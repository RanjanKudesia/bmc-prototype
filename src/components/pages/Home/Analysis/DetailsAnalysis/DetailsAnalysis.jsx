import React from 'react'

function DetailsAnalysis() {
    return (
        <>
        <div id='analysis-table' className="container-sm">
            <table className="table table-secondary table-striped">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HT Number of Connections with Energy Variations +5:</td>
                        <td><div className="vl"></div></td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>HT Number of Connections with Energy Variations -5:</td>
                        <td><div className="vl"></div></td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        {/* <th scope="row">2</th> */}
                        <td>HT Number of Connections with zero energy Consumption:</td>
                        <td><div className="vl"></div></td>
                        <td>1056</td>
                    </tr>
                    <tr>
                        {/* <th scope="row">3</th> */}
                        <td>LT Number of Connections with Energy Variations of +5%:</td>
                        <td><div className="vl"></div></td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        {/* <th scope="row">3</th> */}
                        <td>LT Number of Connections with Energy Variations of -5%:</td>
                        <td><div className="vl"></div></td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        {/* <th scope="row">3</th> */}
                        <td>LT Number of Connections with zero energy Consumption:</td>
                        <td><div className="vl"></div></td>
                        <td>2000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
    )
}

export default DetailsAnalysis