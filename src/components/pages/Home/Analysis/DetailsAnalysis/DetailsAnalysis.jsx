
function DetailsAnalysis({ data, type }) {

    const { plus5, minus5, zeroLT, plus5MDSL, minus5MDSL } = data;

    return (
        <>
            <div className="container-sm">
                <table className="table table-secondary table-striped border border-secondary">

                    <thead>
                        <tr className='fs-4'>
                            <th scope="col">{type}</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td className='fs-4'>Number of Connections with Energy Variations +5:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{plus5}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>Number of Connections with Energy Variations -5:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{minus5}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>Number of Connections with zero energy Consumption:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{zeroLT}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>Number of Connections with MD{'>'}SL by +5%:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{plus5MDSL}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>Number of Connections with MD{'>'}SL by -5%:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{minus5MDSL}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DetailsAnalysis