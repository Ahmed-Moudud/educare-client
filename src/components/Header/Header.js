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
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);


const Header = () => {

  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (
    <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/'><img className='brand-logo' src={logo} alt=" " /></Link>
        <Link to='/' className=''><Navbar.Brand>EduCare</Navbar.Brand></Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to='/'>Home</Link>
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
          <Nav>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div id={theme} className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
          </ThemeContext.Provider>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;