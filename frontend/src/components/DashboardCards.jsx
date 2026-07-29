function DashboardCards({ totalStudents, searchCount }) {

    return (

        <div className="cards">

            <div className="card">

                <p>Total Students</p>

                <h1>{totalStudents}</h1>

            </div>

            <div className="card">

                <p>Search Results</p>

                <h1>{searchCount}</h1>

            </div>

        </div>

    )

}

export default DashboardCards;