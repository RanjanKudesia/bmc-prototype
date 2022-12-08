

function MonthlyDetailsTable({ data }) {

    const [minus5] = data;

    return (
        <>
            {/* <table className="table table-secondary table-bordered table-striped border border-secondary">

                <thead>
                    <tr className=''>
                        <th scope="col">IVRS Number</th>
                        <th scope="col">Division Name</th>
                        <th scope="col">Duty</th>
                        <th scope="col">Energy CHarge</th>
                        <th scope="col">Final Consumption</th>
                        <th scope="col">Fixed Charge</th>
                        <th scope="col">Advance Payment Interest</th>
                        <th scope="col">Last Paid Date</th>
                        <th scope="col">Late Pay Charge</th>
                        <th scope="col">Max Demand</th>
                        <th scope="col">Meter Number</th>
                        <th scope="col">Multiplier</th>
                        <th scope="col">Online Rebate</th>
                        <th scope="col">Other Charges</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Power Factor</th>
                        <th scope="col">Present Meter Reading</th>
                        <th scope="col">Previous Reading</th>
                        <th scope="col">Pending Amount</th>
                        <th scope="col">Reading Type</th>
                        <th scope="col">Sanctioned load</th>
                        <th scope="col">Security Amount Deposit</th>
                        <th scope="col">Subsidy Load Factor</th>
                        <th scope="col">Tariff Cde</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        list.map((x) => {
                            return <tr>
                                <td>{x.accountId}</td>
                                <td>{x.divisionName}</td>
                                <td>{x.duty}</td>
                                <td>{x.energyCharge}</td>
                                <td>{x.finalConsumption}</td>
                                <td>{x.fixedCharge}</td>
                                <td>{x.intrestAdvancePayment}</td>
                                <td>{x.latsPaidDate}</td>
                                <td>{x.latePayCharge}</td>
                                <td>{x.maxDemand}</td>
                                <td>{x.meterNo}</td>
                                <td>{x.multiplier}</td>
                                <td>{x.onlineRebate}</td>
                                <td>{x.otherCharges}</td>
                                <td>{x.phone2}</td>
                                <td>{x.powerFactor}</td>
                                <td>{x.presentMeterReading}</td>
                                <td>{x.presentReading}</td>
                                <td>{x.previousPendingAmount}</td>
                                <td>{x.readingType}</td>
                                <td>{x.sanctionLoad}</td>
                                <td>{x.securityAmountDeposit}</td>
                                <td>{x.subsidyLoadFactor}</td>
                                <td>{x.tariffCode}</td>
                            </tr>
                        })
                    }

                </tbody >
            </table > */}


            {/* <ul>
                {
                    list[0].duty
                }
            </ul> */}
        </>
    )
}

export default MonthlyDetailsTable;