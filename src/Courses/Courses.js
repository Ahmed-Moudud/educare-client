import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';
import './Courses.css'

const Courses = () => {
    const allCourses = useLoaderData();
    return (
     <div className='d-flex mx-3'>
        <div className='w-25'>
            {
                allCourses.map(course => <p key={course.id}><Link to={`/courses/${course.id}`}>{course.title}</Link></p>)
            }
        </div>
        <div className='card-container'>
            
            {
                allCourses.map(course => <CourseSummaryCard
                key={course.id}
                course={course}
                ></CourseSummaryCard>)
            }
        </div>
     
     
     </div>
    );
};

export default Courses;