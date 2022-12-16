

function Three({ list }) {
    let count = 0;
    return (
        <>
            <table id="monthlyDetailsTable" className="table table-hover table-secondary table-bordered table-striped border border-secondary mt-3 pt-5">

                {/* <thead className='table-dark'> */}
                <thead>
                    <tr>
                        <th scope="col">IVRS Number</th>
                        <th scope="col">Distribution Center</th>
                        <th scope="col">Sanctioned Load</th>
                        <th scope="col">Contract Demand</th>
                        <th scope="col">Maximum Demand</th>
                        <th scope="col">Tariff Code</th>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.previousReading}</td>
                                        <td>{x.presentMeterReading}</td>
                                        <td>{x.tariffCode}</td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>{x.tariffCode}</td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>{x.tariffCode}</td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>{x.tariffCode}</td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>{x.tariffCode}</td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>{x.tariffCode}</td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>{x.tariffCode}</td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>{x.tariffCode}</td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>{x.tariffCode}</td>
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

export default Three