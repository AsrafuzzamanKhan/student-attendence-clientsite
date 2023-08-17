import React from 'react';
import Course from './Course';
import icon from '../../../assets/icons/quote.svg'


const Courses = () => {
    const courses = [
        {
            id: 1,
            name: 'Introduction to Computer',
            duration: 6,
            instructor: 'Lutfi habiba',
            img: icon

        },
        {
            id: 2,
            name: 'Networking',
            duration: 6,
            instructor: 'Ditee Yasmeen',
            img: icon

        },
        {
            id: 3,
            name: 'Programming language',
            duration: 6,
            instructor: 'Sanjida Hoque Shoshey ',
            img: icon

        },

        {
            id: 4,
            name: 'Differential Calculus',
            duration: 6,
            instructor: 'MA MAjid',
            img: icon

        },
        {
            id: 5,
            name: 'Database',
            duration: 6,
            instructor: 'Tasmi Sultana',
            img: icon

        },
        {
            id: 6,
            name: 'District Mathematics',
            duration: 6,
            instructor: 'Tania Sultana',
            img: icon

        },

    ]
    return (
        // <div style={{ backgroundImage: `url(${homebg})` }}>
        <div className='max-w-[1440px] mx-auto'>
            <div className=''>
                <h2 className='text-3xl font-bold text-center '>Courses</h2>
            </div>
            <div className="flex flex-col w-full border-opacity-50">

                <div className="divider"></div>

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