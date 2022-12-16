import { CSVLink } from "react-csv";



function DownloadButton({ data, list }) {

    const { plus5List, minus5List, zeroLTList, plus5MDSLList, minus5MDSLList, firstWithLocation, totalPowerFactorLessThan8List } = data;


    return (
        <>
            {
                (list === 'zero') ?
                    <CSVLink className='btn btn-secondary' data={plus5List}>Download Details for above list</CSVLink>
                    :
                    (list === 'first') ?
                        <CSVLink className='btn btn-secondary' data={minus5List}>Download Details for above list</CSVLink>
                        :
                        (list === 'second') ?
                            <CSVLink className='btn btn-secondary' data={zeroLTList}>Download Details for above list</CSVLink>
                            :
                            (list === 'third') ?
                                <CSVLink className='btn btn-secondary' data={plus5MDSLList}>Download Details for above list</CSVLink>
                                :
                                (list === 'fourth') ?
                                    <CSVLink className='btn btn-secondary' data={minus5MDSLList}>Download Details for above list</CSVLink>
                                    :
                                    (list === 'fifth') ?
                                        <CSVLink className='btn btn-secondary' data={firstWithLocation}>Download Details for above list</CSVLink>
                                        :
                                        (list === 'sixth') ?
                                            <CSVLink className='btn btn-secondary' data={totalPowerFactorLessThan8List}>Download Details for above list</CSVLink>
                                            :
                                            null
                
            }
        </>
    )
}

export default DownloadButton;