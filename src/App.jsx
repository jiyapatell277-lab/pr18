
import { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Amit" }
  ]);

  function deleteStudent(id) {
    setStudents(students.filter(
      (student) => student.id !== id
    ));
  }

  return (
    <div>
      <h2>Student Management</h2>

      {students.map((student) => (
        <div key={student.id}>
          {student.name}{" "}
          <button
            onClick={() => deleteStudent(student.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
