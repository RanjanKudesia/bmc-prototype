

function Home({ existingUser }) {
    return (
        <>
            {
                existingUser ?
                    <h1 className="text-xl ">Home</h1>
                    :
                    <h1>Please Login to see details</h1>
            }
        </>
    )
}

export default Home;