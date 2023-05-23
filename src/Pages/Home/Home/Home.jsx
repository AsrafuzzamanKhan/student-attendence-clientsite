import React from 'react';
import StudentLists from '../StudentList/StudentLists';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StudentLists></StudentLists>
            <Courses></Courses>
        </div>
    );
};

export default Home;