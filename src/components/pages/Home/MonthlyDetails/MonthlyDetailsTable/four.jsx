import ConnectionData from "../ConnectionData";
import { useState } from "react";

function Four({ list }) {
    list = list.sort(function (a, b) {
        const nameA = a.distributionCenter1.toUpperCase(); // ignore upper and lowercase
        const nameB = b.distributionCenter1.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });;
    const [connectionNumber, setConnectionNumber] = useState(list[0]);
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
                        <th scope="col">Sanctioned Load</th>
                        <th scope="col">Contract Demand</th>
                        <th scope="col">Maximum Demand</th>
                        <th scope="col">Full Detail</th>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>
                                            <button onClick={() => setConnectionNumber(x)} className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                Details
                                            </button>
                                        </td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>
                                            <button onClick={() => setConnectionNumber(x)} className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                Details
                                            </button>
                                        </td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>
                                            <button onClick={() => setConnectionNumber(x)} className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                Details
                                            </button>
                                        </td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>
                                            <button onClick={() => setConnectionNumber(x)} className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                Details
                                            </button>
                                        </td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>
                                            <button onClick={() => setConnectionNumber(x)} className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                Details
                                            </button>
                                        </td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>
                                            <button onClick={() => setConnectionNumber(x)} className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                Details
                                            </button>
                                        </td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>
                                            <button onClick={() => setConnectionNumber(x)} className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                Details
                                            </button>
                                        </td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>
                                            <button onClick={() => setConnectionNumber(x)} className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                Details
                                            </button>
                                        </td>
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
                                        <td>{x.sanctionLoad}</td>
                                        <td>{x.contractDemand}</td>
                                        <td>{x.maxDemand}</td>
                                        <td>
                                            <button onClick={() => setConnectionNumber(x)} className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }) : null
                    }

                </tbody >
            </table >
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">IVRS Number: {connectionNumber.accountId}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ConnectionData x={connectionNumber} />
                </div>
            </div>
            {console.log(count)}
        </>
    )
}

export default Four