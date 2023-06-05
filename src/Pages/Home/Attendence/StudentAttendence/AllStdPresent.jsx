import React, { useContext, useEffect, useState } from 'react';
import { DayPicker } from "react-day-picker";
import { AuthContext } from '../../../../contexts/AuthProvider';
import { format } from 'date-fns';


const AllStdPresent = () => {
    const { user } = useContext(AuthContext);

    const [attendence, setAttendence] = useState([])

    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, 'PP')
    useEffect(() => {
        fetch(`http://localhost:5000/attendence?email=${user?.email}&date=${date}`)
            .then(res => res.json())
            .then(data => setAttendence(data))
    }, [date])
    return (
        <div className='px-5'>
            {/* calende  */}
            <div >
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}

                />
                <p className='text-xl'> <span className='text-primary'>Teacher Name:</span> {user?.displayName}</p>
                <p className='text-xl'> <span className='text-secondary'>Date:</span> {date}</p>

            </div>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class roll</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Atttend</th>



                        </tr>
                    </thead>
                    <tbody>
                        {
                            attendence?.map((row, index) => (
                                <tr key={row._id}>
                                    <th>{index + 1}</th>
                                    <th>{row.studentRoll}</th>
                                    <td>{row.studentName}</td>
                                    <td>{row.date}</td>
                                    <td>{
                                        row?.attend === 'Present' ? <button className='btn btn-success '>Presnt</button> : <button className='btn btn-error'>Absence</button>
                                    }
                                    </td>

                                    <td>

                                    </td>
                                </tr>
                            ))
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllStdPresent;