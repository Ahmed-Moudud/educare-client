import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>404- Item not found!!</h1>
            <Link to='/home'><Button>Back Home</Button></Link>
        </div>
    );
};

export default ErrorPage;