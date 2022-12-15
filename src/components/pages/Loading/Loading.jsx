import ReactLoading from 'react-loading';







function Loading() {
    return (
        <>
            <section className="container mt-5 pt-5">
                <div className="container py-5 mt-5 pt-5">
                    <div className='d-flex justify-content-center align-content-center mt-5 pt-5'>
                    <ReactLoading type={'spin'} color={'#fd5f00'} height={100} width={100} />
                    </div>
                </div>
            </section>


        </>
    )
}

export default Loading
