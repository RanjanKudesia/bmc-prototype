import { useState } from 'react';
import ConsumptionGraph from './graphs/ConsumptionGraph';


const connectionNumberSequence = [
    'N55468',
    'N55469',
    'N55470',
    'N55471',
    'N55472',
    'N55473',
    'N55474',
    'N55475',
    'N55476',
    'N55477',
]

const BMCNumber = [
    'BMC-1',
    'BMC-2',
    'BMC-3',
    'BMC-4',
    'BMC-5',
    'BMC-6',
    'BMC-7',
    'BMC-8',
    'BMC-9',
    'BMC-10',
]





export default function DashBoard({ existingUser }) {

    const [BMCNumberOption, setBMCNumberOption] = useState('');
    const [connectionNumberOption, setConnectionNumberOption] = useState('');


    function handleOnSelectMBCNumber(event) {
        setBMCNumberOption(event.target.value);
    }

    function handleOnSelectConnectionNumber(event) {
        setConnectionNumberOption(event.target.value);
    }


    return (
        <>
            {
                existingUser ?
                    <>

                        {/* This is for selecting BMC number */}
                        <div className="form-floating mt-3">
                            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleOnSelectMBCNumber} defaultValue={'none'}>
                                <option value="none">Select an Option</option>
                                {
                                    BMCNumber.map(seq => {
                                        return (
                                            <>
                                                <option key={seq} value={seq}>{seq}</option>
                                            </>
                                        );
                                    })
                                }
                            </select>
                            <label htmlFor="floatingSelect">BMC Number</label>
                        </div>
                        {/* This is for selecting Connection number */}
                        <div className="form-floating mt-3">
                            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleOnSelectConnectionNumber} defaultValue={'none'}>
                                <option value="none">Select an Option</option>
                                {
                                    connectionNumberSequence.map(seq => {
                                        return (
                                            <>
                                                <option key={seq} value={seq}>{seq}</option>
                                            </>
                                        );
                                    })
                                }
                            </select>
                            <label htmlFor="floatingSelect">Connection-Number</label>
                        </div>

                        <button className="btn btn-outline-success mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#graph" aria-expanded="false" aria-controls="collapseWidthExample">
                            Show Graph
                        </button>
                        <p>
                            <div id='graph' className='collapse collapse-horizontal mt-3 mb-3'>
                                <ConsumptionGraph connectionNumber={connectionNumberOption} />
                            </div>
                            <div className="card" >
                                <div className="card-body">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header bg-secondary" id="flush-headingOne">
                                                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Address
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body alert alert-warning">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Accordion Item #2
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body alert alert-warning">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Accordion Item #3
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body alert alert-warning">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </p>
                    </>
                    :
                    <>
                        <h1>Please login to see details</h1>
                    </>
            }
        </>
    );
}