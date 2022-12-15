

function CommercialDetails({ data }) {

    const { totalBill, zeroLT, zeroLTFixedCharge, zeroLTSecurityAmountDeposit, surchargePayableOnDelay, totalPowerFactorLessThan8, PowerFactorLessThan8TotalWeldingCharge } = data;

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
                            <td className='fs-4'>Gross LT bill(Rs):</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{totalBill}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'> LT Connections with zero bill:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{zeroLT}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>Fixed charge for LT connection with zero bill(Rs):</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{zeroLTFixedCharge}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>Total security deposit of LT connections with zero bill:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{parseInt(zeroLTSecurityAmountDeposit)}</td>
                        </tr>


                        <tr>
                            <td className='fs-4'>Surcharge payable on delay(Rs):</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{surchargePayableOnDelay}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>LT connections with  Power-Factor less than 0.8:</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{totalPowerFactorLessThan8}</td>
                        </tr>

                        <tr>
                            <td className='fs-4'>Total Welding Surcharge of LT connections with power-factor less than 0.8 (Rs):</td>
                            <td><div className="vl"></div></td>
                            <td className='fs-4'>{parseInt(PowerFactorLessThan8TotalWeldingCharge)}</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CommercialDetails;