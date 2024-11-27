import React from 'react'
import  NavBar  from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'


export default function Navbar() {

  const navigate=useNavigate()
  const handelWelcome=()=>{
    navigate('/')
  }
  return (
    <>
      <NavBar>
          <Container>
              <NavBar.Brand to="/"><strong onClick={handelWelcome}>User Registration</strong></NavBar.Brand>
              <Nav className='ml-auto'>
                  <Nav.Link as={Link} to="/dashboard"  className='nav-link'>User Details</Nav.Link>
                  <Nav.Link as={Link} to ="/registerform" className='nav-link'>Register</Nav.Link>
              </Nav>
          </Container>
      </NavBar>
    </>
  )
}
