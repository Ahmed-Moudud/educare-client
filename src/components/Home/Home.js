import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';
import './Home.css'


const Home = () => {

    const allCourses = useLoaderData();
   
    return (
        <div className='card-container'>
            
            {
                allCourses.map(course => <CourseSummaryCard
                key={course.id}
                course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Home;