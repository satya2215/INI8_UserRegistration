import React from 'react';
import './Welcome.css';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {

  const navigate=useNavigate();

  const handleRegister=()=>{
    navigate('/registerform')
  }


  return (
    <Container fluid className="welcome-container  d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4 text-uppercase text-center mb-4">
        Welcome to a new CRUD operation project
      </h1>
      <p className="text-center lead fw-bold mb-4 ">
        This project demonstrates Create, Read, Update, and Delete operations using React and Spring Boot.
      </p>
      <Button
        variant="light"
        size="lg"
        className="explore-button"
        onClick={handleRegister} 
      >
        Register
      </Button>
    </Container>
  );
}
