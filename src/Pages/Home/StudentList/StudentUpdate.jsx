import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const StudentUpdate = () => {
    const storedStudent= useLoaderData();
    const [student, setSudent] = useState(storedStudent)

    const handleUpdateStudent = e => {
        e.preventDefault();
        // console.log(student);
        fetch(`http://localhost:5000/studentList/${storedStudent._id}`,{
method:'PUT',
headers:{
    'Content-Type':'application/json'
},
body: JSON.stringify(student)
        })
        .then(res=>res.json())
        .then(data=>{
          
            if(data.modifiedCount>0){
                alert('User updated ')
                console.log(data)
             
            }
        })

       

    }
    const handleSudentChange = e => {
        const value = e.target.value;
        const felid = e.target.name;
        const newStudent = { ...student }
        newStudent[felid] = value
        setSudent(newStudent)
    }
    return (
        <div>
        <h1>Please Update a Student </h1>
        <form onSubmit={handleUpdateStudent}>
            <input onChange={handleSudentChange} type="text" defaultValue={storedStudent.name} name='name' placeholder='name' />
            <br />
            <input onChange={handleSudentChange} type="number" defaultValue={storedStudent.roll} name='roll' placeholder='roll' />
            <br />
            <input onChange={handleSudentChange} type="email" defaultValue={storedStudent.email} name='email' placeholder='Email' />
            <br />
            <button type='submit'>Add Student</button>
        </form>
    </div>
    );
};

export default StudentUpdate;