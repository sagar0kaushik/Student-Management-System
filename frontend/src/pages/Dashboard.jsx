import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import SearchBar from "../components/SearchBar";
import StudentList from "../components/StudentList";

import "../styles/dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const [students, setStudents] = useState([]);

    const [search, setSearch] = useState("");

    const [editingStudent, setEditingStudent] = useState(null);

    const fetchStudents = async () => {
        try{
            const res = await API.get("/students");
            setStudents(res.data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchStudents();
    },[])

    return (

        <div className="dashboard">

            <div className="background-circle one"></div>
            <div className="background-circle two"></div>

            <Navbar/>

            <div className="dashboard-content">

                <DashboardCards
                    totalStudents={students.length}
                    searchCount={
                        students.filter(student =>
                            student.name.toLowerCase().includes(search.toLowerCase())
                        ).length
                    }
                />

                <div className="dashboard-actions">

                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />

                    <button
                        className="add-btn"
                        onClick={() => navigate("/students")}
                    >
                        + Add Student
                    </button>

                </div>

                <StudentList
                    students={students}
                    search={search}
                    fetchStudents={fetchStudents}
                    setEditingStudent={setEditingStudent}
                />

            </div>

        </div>

    )

}

export default Dashboard;