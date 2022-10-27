import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const courseDetail = useLoaderData();
  
    const {title, description, image} = courseDetail;  
    
    return (
        <div>
            <h3>This is from single course</h3>
          
               <h2>{title}</h2>
               <p>{description}</p> 
               <img src={image} alt=' '></img>
               
           
        </div>
    );
};

export default SingleCourse;