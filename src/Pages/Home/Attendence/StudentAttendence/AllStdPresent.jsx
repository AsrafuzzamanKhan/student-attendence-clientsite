import React, { useContext, useEffect, useState } from 'react';
import { DayPicker } from "react-day-picker";
import { AuthContext } from '../../../../contexts/AuthProvider';
import { format } from 'date-fns';


const AllStdPresent = ({ selectedDate, setSelectedDate }) => {
    const { user } = useContext(AuthContext);
    const date = format(selectedDate, 'PP')
    const [attendence, setAttendence] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/attendence?email=${user?.email}&date=${date}`)
            .then(res => res.json())
            .then(data => setAttendence(data))
    }, [date])
    return (
        <div className='max-w-[1440px] mx-auto'>
            {/* calende  */}
            <div>
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
            </div>

            <p>{user?.email}</p>
            <p>Date: {date}</p>
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
                                    <td>{row?.attend}</td>

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