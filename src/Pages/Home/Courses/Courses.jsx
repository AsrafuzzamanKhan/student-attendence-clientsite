import React from 'react';
import Course from './Course';
import icon from '../../../assets/icon/icon.png'
import homebg from '../../../assets/banner/homebg.jpg'

const Courses = () => {
    const courses = [
        {
            id: 1,
            name: 'IntroDuction To Computer',
            duration: 6,
            instructor: 'Lutfi habiba',
            img: icon

        },
        {
            id: 2,
            name: 'Programming language',
            duration: 6,
            instructor: 'Ditee Yasmeen',
            img: icon

        },
        {
            id: 3,
            name: 'Programming language practical',
            duration: 6,
            instructor: 'Ditee Yasmeen',
            img: icon

        },
        {
            id: 4,
            name: 'Differential calculas',
            duration: 6,
            instructor: 'MA MAjid',
            img: icon

        },
        {
            id: 5,
            name: 'Database',
            duration: 6,
            instructor: 'Toma yasmeen',
            img: icon

        },
        {
            id: 6,
            name: 'District Mathematic',
            duration: 6,
            instructor: 'Soshi',
            img: icon

        },

    ]
    return (
        <div style={{ backgroundImage: `url(${homebg})` }}>
            <div>
                <h2 className='text-3xl font-bold text-center '>Course</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3'>
                {courses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)}
            </div>
        </div >
    );
};

export default Courses;