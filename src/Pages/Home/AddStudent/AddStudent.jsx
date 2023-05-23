import React, { useState } from 'react';

const AddStudent = () => {
    const [student, setSudent] = useState({})

    const handleAddStudent = e => {
        e.preventDefault();
        console.log(student);

        fetch('http://localhost:5000/addStudent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('User Added Sucessfully');
                    e.target.reset()// from reset
                }
            })

    }
    const handleSudentBlur = e => {
        const value = e.target.value;
        const felid = e.target.name;
        const newStudent = { ...student }
        newStudent[felid] = value
        setSudent(newStudent)
    }
    return (
        <div>
            <h1>Please add a Student </h1>
            <form onSubmit={handleAddStudent}>
                <input onChange={handleSudentBlur} type="text" name='name' placeholder='name' />
                <br />
                <input onChange={handleSudentBlur} type="number" name='roll' placeholder='roll' />
                <br />
                <input onChange={handleSudentBlur} type="email" name='email' placeholder='Email' />
                <br />
                <button type='submit'>Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;