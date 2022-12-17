

function Five({ list }) {
    let count = 0;
    return (
        <>
            <table id="monthlyDetailsTable" className="table table-hover table-secondary table-bordered table-striped border border-secondary mt-3 pt-5">

                {/* <thead className='table-dark'> */}
                <thead>
                    <tr>
                        <th scope="col">IVRS Number</th>
                        <th scope="col">Distribution Center</th>
                        <th scope="col">Tariff Code</th>
                        <th scope="col">Energy Charge</th>
                        <th scope="col">Total Consumption</th>
                        <th scope="col">Fixed Charges</th>
                        <th scope="col">Total Amount After Due Date</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        list.slice(0, 200) ?
                            list.slice(0, 200).map((x) => {
                                if (!x) {
                                    return null;
                                } else {
                                    count++;
                                }
                                return (
                                    <tr>
                                        <td>{x.accountId}</td>
                                        <td>{x.distributionCenter1}</td>
                                        <td>{x.tariffCode}</td>
                                        <td>{x.energyCharge}</td>
                                        <td>{x.totalConsumption}</td>
                                        <td>{x.fixedCharge}</td>
                                        <td>{x.totalAmountAfterDueDate}</td>
                                    </tr>
                                )
                            }) : null
                    }

                    {
                        list.slice(300, 600) ?
                            list.slice(300, 600).map((x) => {
                                if (!x) {
                                    return null;
                                } else {
                                    count++;
                                }
                                return (
                                    <tr>
                                        <td>{x.accountId}</td>
                                        <td>{x.distributionCenter1}</td>
                                        <td>{x.tariffCode}</td>
                                        <td>{x.energyCharge}</td>
                                        <td>{x.totalConsumption}</td>
                                        <td>{x.fixedCharge}</td>
                                        <td>{x.totalAmountAfterDueDate}</td>
                                    </tr>
                                )
                            }) : null
                    }

                    {
                        list.slice(600, 900) ?
                            list.slice(600, 900).map((x) => {
                                if (!x) {
                                    return null;
                                } else {
                                    count++;
                                }
                                return (
                                    <tr>
                                        <td>{x.accountId}</td>
                                        <td>{x.distributionCenter1}</td>
                                        <td>{x.tariffCode}</td>
                                        <td>{x.energyCharge}</td>
                                        <td>{x.totalConsumption}</td>
                                        <td>{x.fixedCharge}</td>
                                        <td>{x.totalAmountAfterDueDate}</td>
                                    </tr>
                                )
                            }) : null
                    }

                    {
                        list.slice(900, 1200) ?
                            list.slice(900, 1200).map((x) => {
                                if (!x) {
                                    return null;
                                } else {
                                    count++;
                                }
                                return (
                                    <tr>
                                        <td>{x.accountId}</td>
                                        <td>{x.distributionCenter1}</td>
                                        <td>{x.tariffCode}</td>
                                        <td>{x.energyCharge}</td>
                                        <td>{x.totalConsumption}</td>
                                        <td>{x.fixedCharge}</td>
                                        <td>{x.totalAmountAfterDueDate}</td>
                                    </tr>
                                )
                            }) : null
                    }

                    {
                        list.slice(1200, 1500) ?
                            list.slice(1200, 1500).map((x) => {
                                if (!x) {
                                    return null;
                                } else {
                                    count++;
                                }
                                return (
                                    <tr>
                                        <td>{x.accountId}</td>
                                        <td>{x.distributionCenter1}</td>
                                        <td>{x.tariffCode}</td>
                                        <td>{x.energyCharge}</td>
                                        <td>{x.totalConsumption}</td>
                                        <td>{x.fixedCharge}</td>
                                        <td>{x.totalAmountAfterDueDate}</td>
                                    </tr>
                                )
                            }) : null
                    }

                    {
                        list.slice(1500, 1800) ?
                            list.slice(1500, 1800).map((x) => {
                                if (!x) {
                                    return null;
                                } else {
                                    count++;
                                }
                                return (
                                    <tr>
                                        <td>{x.accountId}</td>
                                        <td>{x.distributionCenter1}</td>
                                        <td>{x.tariffCode}</td>
                                        <td>{x.energyCharge}</td>
                                        <td>{x.totalConsumption}</td>
                                        <td>{x.fixedCharge}</td>
                                        <td>{x.totalAmountAfterDueDate}</td>
                                    </tr>
                                )
                            }) : null
                    }

                    {
                        list.slice(1800, 2100) ?
                            list.slice(1800, 2100).map((x) => {
                                if (!x) {
                                    return null;
                                } else {
                                    count++;
                                }
                                return (
                                    <tr>
                                        <td>{x.accountId}</td>
                                        <td>{x.distributionCenter1}</td>
                                        <td>{x.tariffCode}</td>
                                        <td>{x.energyCharge}</td>
                                        <td>{x.totalConsumption}</td>
                                        <td>{x.fixedCharge}</td>
                                        <td>{x.totalAmountAfterDueDate}</td>
                                    </tr>
                                )
                            }) : null
                    }

                    {
                        list.slice(2100, 2400) ?
                            list.slice(2100, 2400).map((x) => {
                                if (!x) {
                                    return null;
                                } else {
                                    count++;
                                }
                                return (
                                    <tr>
                                        <td>{x.accountId}</td>
                                        <td>{x.distributionCenter1}</td>
                                        <td>{x.tariffCode}</td>
                                        <td>{x.energyCharge}</td>
                                        <td>{x.totalConsumption}</td>
                                        <td>{x.fixedCharge}</td>
                                        <td>{x.totalAmountAfterDueDate}</td>
                                    </tr>
                                )
                            }) : null
                    }

                    {
                        list.slice(2400, 2612) ?
                            list.slice(2400, 2612).map((x) => {
                                if (!x) {
                                    return null;
                                } else {
                                    count++;
                                }
                                return (
                                    <tr>
                                        <td>{x.accountId}</td>
                                        <td>{x.distributionCenter1}</td>
                                        <td>{x.tariffCode}</td>
                                        <td>{x.energyCharge}</td>
                                        <td>{x.totalConsumption}</td>
                                        <td>{x.fixedCharge}</td>
                                        <td>{x.totalAmountAfterDueDate}</td>
                                    </tr>
                                )
                            }) : null
                    }



                </tbody >
            </table >
            {console.log(count)}
        </>
    )
}

export default Five