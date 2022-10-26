import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseSummaryCard.css'

const CourseSummaryCard = ({course}) => {
    // console.log(course)
    const {id, title, description, image} = course;
    return (
      <div>
          <Card className='' >
        <Card.Img style={{width: '300px', height: '200px'}} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={`/courses/${course.id}`}><Button variant="primary">Go somewhere</Button></Link>
        </Card.Body>
      </Card>
      </div>
    );
};

export default CourseSummaryCard;