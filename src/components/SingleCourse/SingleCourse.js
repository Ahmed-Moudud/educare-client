import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const SingleCourse = () => {
    const courseDetail = useLoaderData();
  
    const {title, description, image, id} = courseDetail;  
    
    return (
        <div className='w-50 bg-light border border-3 mx-auto p-4 mt-4'>
            <h3>This is an introductory course on {title}. It will be helpful for you to start the journey.</h3>
          
               <h2 className='bg-info text-white'>{title}</h2>
               <p>{description}</p> 
               <img src={image} style={{width: '400px', height: '300px'}} alt=' '></img>
               
           <Link to={`/courses/${id}`}><Button className="d-block my-2">Get Premium Access</Button></Link>
        </div>
    );
};

export default SingleCourse;