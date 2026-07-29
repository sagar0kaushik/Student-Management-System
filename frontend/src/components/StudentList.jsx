import API from "../services/api";

function StudentList({
  students,
  search,
  fetchStudents,
  setEditingStudent,
}) {
  const deleteStudent = async (id) => {
    if (!window.confirm("Delete Student?")) return;

    await API.delete(`/students/${id}`);
    fetchStudents();
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-container">
      <table className="student-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>

          {filteredStudents.length === 0 ? (

            <tr>
              <td colSpan="6" className="empty-row">
                No students found
              </td>
            </tr>

          ) : (

            filteredStudents.map((student) => (

              <tr key={student.id}>

                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
                <td>{student.email}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => setEditingStudent(student)}
                  >
                    Edit
                  </button>
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>
    </div>
  );
}

export default StudentList;