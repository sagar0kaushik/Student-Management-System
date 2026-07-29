import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import API from "../services/api";

import "../styles/crud.css";

function StudentCrud() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="crud-page">

      <div className="crud-container">

        <div className="crud-header">

          <div>

            <h1>Student Management</h1>

            <p>Add, Update and Delete Students</p>

          </div>

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            ← Dashboard
          </button>

        </div>

        <div className="form-card">

          <StudentForm
            fetchStudents={fetchStudents}
            editingStudent={editingStudent}
            setEditingStudent={setEditingStudent}
          />

        </div>

        <div className="table-card">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <StudentList
            students={students}
            search={search}
            fetchStudents={fetchStudents}
            setEditingStudent={setEditingStudent}
          />

        </div>

      </div>

    </div>
  );
}

export default StudentCrud;