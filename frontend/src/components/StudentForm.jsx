import { useEffect, useState } from "react";
import API from "../services/api";

function StudentForm({
  fetchStudents,
  editingStudent,
  setEditingStudent,
}) {
  const initialState = {
    name: "",
    age: "",
    course: "",
    email: "",
  };

  const [student, setStudent] = useState(initialState);

  useEffect(() => {
    if (editingStudent) {
      setStudent({
        name: editingStudent.name || "",
        age: editingStudent.age || "",
        course: editingStudent.course || "",
        email: editingStudent.email || "",
      });
    } else {
      setStudent(initialState);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setStudent(initialState);
    setEditingStudent(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !student.name.trim() ||
      !student.age ||
      !student.course.trim() ||
      !student.email.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(student.email)) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      if (editingStudent) {
        await API.put(`/students/${editingStudent.id}`, student);

        alert("Student updated successfully.");
      } else {
        await API.post("/students", student);

        alert("Student added successfully.");
      }

      fetchStudents();
      resetForm();

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2
        style={{
          gridColumn: "1 / -1",
          color: "#D4AF37",
          marginBottom: "10px",
        }}
      >
        {editingStudent ? "Update Student" : "Add New Student"}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={student.email}
        onChange={handleChange}
      />

      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

      {editingStudent && (
        <button
          type="button"
          onClick={resetForm}
          style={{
            gridColumn: "1 / -1",
            padding: "14px",
            borderRadius: "12px",
            background: "#555",
            color: "#fff",
            marginTop: "10px",
          }}
        >
          Cancel Edit
        </button>
      )}

    </form>
  );
}

export default StudentForm;