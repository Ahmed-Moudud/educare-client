import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {

  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (
    <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/home'><img className='brand-logo' src={logo} alt=" " /></Link>
        <Link to='/home' className=''><Navbar.Brand>EduCare</Navbar.Brand></Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to='/home'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/blog'>Blog</Link>

          </Nav>
          <Nav>
          <>
              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <Button variant='light' onClick={handleLogOut}>Log Out</Button>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }


            </>

            <Link to="/login">
              {
                user?.photoURL ?
                  <Image
                    style={{ height: '30px' }}
                    roundedCircle
                    src={user?.photoURL}>

                  </Image>
                  : <FaUser></FaUser>
              }
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;