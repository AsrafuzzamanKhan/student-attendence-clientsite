import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const StudentLists = () => {
    const [students, setStudents] = useState([]);

    // react query 
    // const { data: students = [] } = useQuery({
    //     queryKey: ["students"],
    //     queryFn: () => fetch('http://localhost:5000/studentList')
    //         .then(res => res.json())
    // })
    useEffect(() => {
        fetch('http://localhost:5000/studentList')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    const handleDelete = (row) => {
        const agree = window.confirm(`${row.name}`)
        console.log('User Row id: ', row._id);
        console.log('row data',row);
        if (agree) {
            fetch(`http://localhost:5000/studentList/${row._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data:',data)
                    if (data.deletedCount > 0) {
                        alert('user deleted succesfully')
                        const remainingStudent = students.filter(std => std._id !== row._id)
                        setStudents(remainingStudent)
                    }
                })
        }
    }
    return (
        <div>
            <div> list {students.length}

                <div>
                    {
                        students.map(row =>
                            <p key={row._id}>
                                {row.roll}
                                {row.name}
                                <Link to={`/updateStudent/${row._id}`}>  <button >Edit</button></Link>
                              
                                <button onClick={() => handleDelete(row)}>X</button>
                            </p>
                        )
                    }
                </div>




            </div>


        </div>

    );
};

export default StudentLists;


{/* <div className="overflow-x-auto">
<table className="table table-compact w-full">
    <thead>
        <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>1</th>
            <th>2</th>
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
            <th>30 </th>
        </tr>
    </thead>
    <tbody>


        {
            students.map((row, index) =>
                <tr
                    key={row._id}
                >
                    <th>{index + 1}</th>
                    <td>{row.name}</td>
                    <td>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn m-0 p-1">Click</label>
                            <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-52">
                                <li><a>Absence</a></li>
                                <li><a>Present</a></li>
                            </ul>
                        </div>
                    </td>
                    <td>
                        <button onClick={() => handleDelete(row)}> Delete </button>
                    </td>
                    <td>c</td>
                    <td>a</td>
                    <td>a</td>
                </tr>
            )}



    </tbody>

</table>
</div> */}