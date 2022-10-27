import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseSummaryCard.css'

const CourseSummaryCard = ({course}) => {
    // console.log(course)
    const {title, description, image} = course;
    return (
      <div>
          <Card className='my-3' style={{ width: '18rem' }} >
        <Card.Img className='' style={{width: '200px', height: '200px'}} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {
              description.length > 100?
              <>{description.slice(0, 100) + '...'}<Link to={`/courses/${course.id}`}>Read More</Link></>
              :
              <span>{description}</span>              
              
            }
          </Card.Text>
          <Link to={`/courses/${course.id}`}><Button variant="primary">Show Detail</Button></Link>
        </Card.Body>
      </Card>
      </div>
    );
};

export default CourseSummaryCard;