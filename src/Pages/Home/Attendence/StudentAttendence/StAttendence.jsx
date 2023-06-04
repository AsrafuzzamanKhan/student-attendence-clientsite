import React, { useContext, useEffect, useState } from 'react';
import { format } from "date-fns";
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';
import Attendence from '../Attendence/Attendence';
import Presents from './Presents';

const StAttendence = ({ selectedDate }) => {
    const { user } = useContext(AuthContext);
    const date = format(selectedDate, 'PP')
    // const [presents, setPresents] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:5000/studentList")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setPresents(data)
    //             console.log(data)
    //         });
    // }, []);


    const { data: presents = [], refetch, isLoading } = useQuery(
        {
            queryKey: ['presents', date],
            queryFn: () => fetch(`http://localhost:5000/studentList?date=${date}`)
                .then(res => res.json())
        }
    )
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    // const handlePresent = event => {
    //     event.preventDefault();
    //     console.log('handel')
    //     const form = event.target;
    //     const name = form.name.value;
    //     const roll = form.roll.value;
    //     const slot = form.slot.value;
    //     const studentPresent = {
    //         presentDate: date,
    //         name,
    //         roll,
    //         slot
    //     }
    //     console.log(pres)
    //     fetch('http://localhost:5000/presents', {
    //         method: "POST",
    //         headers: {
    //             'content-type': "application/json"
    //         },
    //         body: JSON.stringify(studentPresent)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }






    return (
        <section>
            <p className="text-center text-primary font-bold">
                You have selected: {format(selectedDate, "PP")} </p>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[1440px] mx-auto'>


                {
                    presents.map(option =>
                        <Presents
                            key={option._id}
                            option={option}
                            selectedDate={selectedDate}
                        ></Presents>)
                }
            </div>
        </section>
    );
};

export default StAttendence;