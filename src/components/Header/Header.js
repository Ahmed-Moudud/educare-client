import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.jpg'

const Header = () => {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/home'><img className='brand-logo' src={logo} alt=" "/></Link>
        <Link to='/home' className=''><Navbar.Brand>EduCare</Navbar.Brand></Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link className='' to='/home'>Home</Link>
            <Link className=''to='/courses'>Courses</Link>
          
          </Nav>
          <Nav>
            <Link to='/faq'>FAQ</Link>
            <Link to='/blog'>Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;