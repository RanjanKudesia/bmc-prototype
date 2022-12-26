import { CSVLink } from "react-csv";



function DownloadButton({ data, list }) {

    const { updatedFirst, second, third, fourth, fifth, sixth } = data;


    return (
        <>
            {
                (list === 'first') ?
                    <CSVLink className='btn btn-secondary' data={updatedFirst}>Download Details for {updatedFirst[0].billMonthYear}</CSVLink>
                    :
                    (list === 'second') ?
                        <CSVLink className='btn btn-secondary' data={second}>Download Details for {second[0].billMonthYear}</CSVLink>
                        :
                        (list === 'third') ?
                            <CSVLink className='btn btn-secondary' data={third}>Download Details for {third[0].billMonthYear}</CSVLink>
                            :
                            (list === 'fourth') ?
                                <CSVLink className='btn btn-secondary' data={fourth}>Download Details for {fourth[0].billMonthYear}</CSVLink>
                                :
                                (list === 'fifth') ?
                                    <CSVLink className='btn btn-secondary' data={fifth}>Download Details for {fifth[0].billMonthYear}</CSVLink>
                                    :
                                    (list === 'sixth') ?
                                        <CSVLink className='btn btn-secondary' data={sixth}>Download Details for {sixth[0].billMonthYear}</CSVLink>
                                        :
                                        null

            }
        </>
    )
}

export default DownloadButton;