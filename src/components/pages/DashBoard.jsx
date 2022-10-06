import { useState } from 'react';
// import SynchronizedLineChart from './graphs/SynchronizedLineChart'
import ConsumptionGraph from './graphs/ConsumptionGraph';


const sequence = [
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





export default function DashBoard() {


    const [option, setOption] = useState('');


    function handleOnSelect(event) {
        // console.log(event.target.value)
        setOption(event.target.value);
    }


    return (
        <>



            <div class="form-floating">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleOnSelect} defaultValue={'none'}>
                    <option value="none">Select an Option</option>
                    {
                        sequence.map(seq => {
                            return (
                                <>
                                    <option value={seq}>{seq}</option>
                                </>
                            );
                        })
                    }
                </select>
                <label for="floatingSelect">Connection-Number</label>
            </div>





            <ConsumptionGraph connectionNumber={option} />
            {/* <SynchronizedLineChart connectionNumber={option} /> */}

        </>
    );
}