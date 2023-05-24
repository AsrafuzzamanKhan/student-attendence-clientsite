import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";


const StudentAttendence = ({ selectedDate }) => {
  const { user } = useContext(AuthContext);

  const [studentAttendence, setStudentAttendence] = useState([]);




  useEffect(() => {
    fetch("http://localhost:5000/studentList")
      .then((res) => res.json())
      .then((data) => {
        setStudentAttendence(data)
        console.log(data)
      });
  }, []);

  // attendence  


  const handleUpdate = (_id) => {
    console.log('dattttttttttttttttt')
    const url = `http://localhost:5000/studentList/${_id}`;
    console.log('Uri', url)
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(studentAttendence),
    }).then(res => res.json())
      .then(data => {
        console.log('preeeeeeeeee', data)
        if (data.matchedCount == 1) {
          window.location.reload();
          console.log(data)

        }
      }
      )
  };


  return (
    <section className="mt-16">
      <p className="text-center text-primary font-bold">
        You have selected: {format(selectedDate, "PP")}
      </p>
      <p>Teacher name: {user?.displayName}</p>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Roll</th>
                <th>Name</th>
                <th>{format(selectedDate, "PP")}</th>
                <th>{format(selectedDate, "PP")}</th>

              </tr>
            </thead>
            <tbody>
              {studentAttendence.map((row, index) => (
                <tr key={row._id}>
                  <th>{index + 1}</th>
                  <td>{row.name}</td>
                  <td>
                    {row?.status === 'Absence' ? (
                      <button
                        onClick={() => handleUpdate(row._id)}
                        className="btn btn-warning"
                      >
                        Absence
                      </button>
                    ) : (
                      <button onClick={() => handleUpdate(row._id)} className="btn btn-success">Present</button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StudentAttendence;
