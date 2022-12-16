

function MonthlyDetailsTable({ x, list }) {


    return (
        <>
            <table id="monthlyDetailsTable" className="table table-hover table-secondary table-striped border border-secondary mt-3 pt-5">

                <tbody>


                    <tr>
                        <td className='fs-4'>IVRS Number</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.accountId}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Address-1</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.address1}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Address-2</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.address2}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Bill-Date</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.billDate}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Bill-Due-Date-Cash</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.billDueDateCash}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Bill-Month-Year</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.billMonthYear}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Bill-Purpose</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.billPurpose}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Bill-Type</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.billType}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Billing-Demand</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.billingDemand}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Category-Code</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.categoryCode}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>ccb-Calculation</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.ccbCalculation}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Contract-Demand</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.contractDemand}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Current-Payable-Amount</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.currentPayableAmount}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Customer-Deposit-Amount</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.customerDepositedAmount}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Customer-Name</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.customerName}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Distribution Center-1</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.distributionCenter1}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Division-Name</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.divisionName}
                        </td>
                    </tr>

                    <tr>
                        <td className='fs-4'>Duty</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.duty}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Energy Charge</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.energyCharge}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Final Consumption</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.finalConsumption}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Fixed Charge</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.fixedCharge}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Interest-Advance-Payment</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.intrestAdvancePayment}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Last Paid Date</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.lastPaidDate}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>latePayCharge</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.latePayCharge}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Max-Demand</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.maxDemand}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Meter Number</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.meterNo}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Multiplier</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.multiplier}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Online Rebate</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.onlineRebate}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Other Charges</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.otherCharges}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Outstanding-Amount</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.outstandingAmt}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Penal-Charge</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.penalCharge}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Phone Number-2</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.phone2}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Power Factor</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.powerFactor}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Present Meter Reading</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.presentMeterReading}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Previous Meter Reading</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.previousPendingAmount}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Previous Reading</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.previousReading}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Reading Date</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.readingDate}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Reading Type</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.readingType}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Sanctioned Load</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.sanctionLoad}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Security Amount Deposit</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.securityAmountDeposit}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Security Amount Pending</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.securityAmountPending}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Subsidy Load Factor</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.subsidyLoadFactor}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Tariff Code</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.tariffCode}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Total Amount After Due Date</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.totalAmountAfterDueDate}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Total Consumption</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.totalConsumption}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Welding-Surcharge</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.weldingSurcharge}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Latitude</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.latitude}
                        </td>
                    </tr>
                    <tr>
                        <td className='fs-4'>Longitude</td>
                        <td><div className="vl"></div></td>
                        <td className="fs-5">
                            {x.longitude}
                        </td>
                    </tr>
                </tbody >
            </table >

        </>
    )
}

export default MonthlyDetailsTable;