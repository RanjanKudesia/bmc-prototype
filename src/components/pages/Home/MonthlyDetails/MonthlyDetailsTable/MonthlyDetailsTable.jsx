import Zero from "./zero";
import One from "./one";
import Two from "./two";
import Three from "./three";
import Four from "./four";
import Five from "./five";
import Six from './six';

function MonthlyDetailsTable({ data, list }) {

    const { plus5List, minus5List, zeroLTList, plus5MDSLList, minus5MDSLList, first, totalPowerFactorLessThan8List } = data;

    return (
        <>

            {
                (list === 'zero' && <Zero list={plus5List} />)
                    ?
                    <Zero list={plus5List} />
                    :
                    (list === 'first' && <One list={minus5List} />)
                        ?
                        <One list={minus5List} />
                        :
                        (list === 'second' && <Two list={zeroLTList} />)
                            ?
                            <Two list={zeroLTList} />
                            :
                            (list === 'third' && <Three list={plus5MDSLList} />)
                                ?
                                <Three list={plus5MDSLList} />
                                :
                                (list === 'fourth' && <Four list={minus5MDSLList} />)
                                    ?
                                    <Four list={minus5MDSLList} />
                                    :
                                    (list === 'fifth' && <Five list={first} />)
                                        ?
                                        <Five list={first} />
                                        :
                                        (list === 'sixth' && <Six list={totalPowerFactorLessThan8List} />)
                                            ?
                                            <Six list={totalPowerFactorLessThan8List} />
                                            :
                                            null
            }
        </>
    )
}

export default MonthlyDetailsTable;
