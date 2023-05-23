import React from 'react';

const Course = ({ course }) => {
    const { name, instructor, duration, img } = course
    return (
        <div className="card w-100 glass">
            <figure className="px-10 pt-10"><img src={img} alt="course" /></figure>
            <div className="card-body p-2">
                <h2 className="card-title text-blue-600">{name}</h2>
                <p>Instructor: {instructor}</p>
                <p>Duration: {duration}</p>

            </div>
        </div>
    );
};

export default Course;

