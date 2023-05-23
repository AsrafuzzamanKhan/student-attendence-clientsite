import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const StudentAttendence = ({ selectedDate }) => {
  const [studentAttendence, setStudentAttendence] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/studentList")
      .then((res) => res.json())
      .then((data) => setStudentAttendence(data));
  }, []);
  return (
    <section className="mt-16">
      <p className="text-center text-primary font-bold">
        You have selected: {format(selectedDate, "PP")}
      </p>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Roll</th>
                <th>Name</th>
                <th>{format(selectedDate, "PP")}</th>
                {/* <th>2</th>
                <th>3</th>
                <th>4 </th>
                <th>5 </th>
                <th>6 </th>
                <th>8 </th>
                <th>9 </th>
                <th>10 </th>
                <th>12 </th>
                <th>13 </th>
                <th>14 </th>
                <th>15 </th>
                <th>16 </th>
                <th>17 </th>
                <th>18 </th>
                <th>19 </th>
                <th>20 </th>
                <th>21 </th>
                <th>22 </th>
                <th>23 </th>
                <th>24 </th>
                <th>25 </th>
                <th>26 </th>
                <th>27 </th>
                <th>28 </th>
                <th>29 </th>
                <th>30 </th> */}
              </tr>
            </thead>
            <tbody>
              {studentAttendence.map((row, index) => (
                <tr key={row._id}>
                  <th>{index + 1}</th>
                  <td>{row.name}</td>
                  <td>
                    <div className="dropdown">
                      <label tabIndex={0} className="btn m-0 p-1">
                        Click
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>Absence</a>
                        </li>
                        <li>
                          <a>Present</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {/* <button onClick={() => handleDelete(row)}> Delete </button> */}
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
