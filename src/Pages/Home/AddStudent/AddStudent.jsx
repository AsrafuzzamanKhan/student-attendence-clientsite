import React, { useState } from 'react';
import addImg from '../../../assets/addStd/addStd.jpg'
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
        const newStudent = { ...student, status: 'Absence' }
        newStudent[felid] = value
        setSudent(newStudent)
    }
    return (
        // <div>
        //     <h1>Please add a Student </h1>
        //     <form onSubmit={handleAddStudent}>
        //         <input onChange={handleSudentBlur} type="text" name='name' placeholder='name' />
        //         <br />
        //         <input onChange={handleSudentBlur} type="number" name='roll' placeholder='roll' />
        //         <br />
        //         <input onChange={handleSudentBlur} type="email" name='email' placeholder='Email' />
        //         <br />
        //         <button type='submit'>Add Student</button>
        //     </form>
        // </div>
        <div className="h-[80vh] flex justify-center items-center ">
            {/* <figure><img className='md:w-1/2 lg:w-1/2' src={addImg} alt="Album" /></figure> */}
            <div className="w-96 p-7 shadow-xl rounded">
                <h2 className="card-title text-2xl text-center uppercase">Add Student</h2>



                <form onSubmit={handleAddStudent}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Roll</span>
                        </label>
                        <input onChange={handleSudentBlur} type="number" name='roll' placeholder='roll' className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input onChange={handleSudentBlur} type="text" name='name' placeholder='name' className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={handleSudentBlur} type="email" name='email' placeholder='Email' className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input onChange={handleSudentBlur} type="number" name='phone' placeholder='Phone number' className="input input-bordered w-full max-w-xs" />
                    </div>


                    <button type='submit' className='btn btn-primary  w-full mt-5 '>Add Student</button>
                </form>



            </div>
        </div>
    );
};

export default AddStudent;