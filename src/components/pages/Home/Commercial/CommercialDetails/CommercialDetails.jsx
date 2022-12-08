

function CommercialDetails({ data }) {

    const { totalBill, zeroLT, surchargePayableOnDelay, totalPowerFactorLessThan8 } = data;

    return (
        <>
            <div className="container d-flex justify-content-center">
                <table id='analysis-table' className="table table-secondary table-striped border border-secondary">
                    <tbody>

                        {/* <tr>
                            <td className='fs-4'>Gross bill HT+LT:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>2000</td>
                        </tr> */}

                        {/* <tr>
                            <td className='fs-4'>Gross HT bill:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>1000</td>
                        </tr> */}

                        <tr>
                            <td className='fs-4'>Gross LT bill:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{totalBill}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'> LT Connections with zero bill:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{zeroLT}</td>
                        </tr>


                        <tr>
                            <td className='fs-4'>Surcharge payable on delay:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{surchargePayableOnDelay}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>totalPowerFactorLessThan (0.8):</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{totalPowerFactorLessThan8}</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CommercialDetails;