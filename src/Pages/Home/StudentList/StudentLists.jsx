import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentLists = () => {
  const [students, setStudents] = useState([]);

  // react query
  // const { data: students = [] } = useQuery({
  //     queryKey: ["students"],
  //     queryFn: () => fetch('http://localhost:5000/studentList')
  //         .then(res => res.json())
  // })
  useEffect(() => {
    fetch("http://localhost:5000/studentList")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const handleDelete = (row) => {
    const agree = window.confirm(`${row.name}`);
    console.log("User Row id: ", row._id);
    console.log("row data", row);
    if (agree) {
      fetch(`http://localhost:5000/studentList/${row._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data:", data);
          if (data.deletedCount > 0) {
            alert("user deleted succesfully");
            const remainingStudent = students.filter(
              (std) => std._id !== row._id
            );
            setStudents(remainingStudent);
          }
        });
    }
  };
  return (
    <div>
      <div>
        {" "}
        list {students.length}
        <div>
          {students.map((row) => (
            <p key={row._id}>
              {row.roll}
              {row.name}
              <Link to={`/updateStudent/${row._id}`}>
                {" "}
                <button>Edit</button>
              </Link>

              <button onClick={() => handleDelete(row)}>X</button>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentLists;
