import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Register() {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date_of_birth:""
    })
    const handelInputChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData,[name]:value})
        console.log(formData)
    }

    const navigate =useNavigate();
    const handelSubmit= async (e)=>{
      e.preventDefault();

      try{
        const response=await axios.post("http://localhost:8080/ini8/register",formData)

        if (response.status === 200) {
            
            navigate("/dashboard");  
        }
      }
      catch(error){

      }

    }




    return (

        <>
            <div className="center-form">
                <h2>REGISTER HERE</h2>
                <Form onSubmit={handelSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="enter name"
                            value={formData.name}
                            onChange={handelInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="enter email"
                            value={formData.email}
                            onChange={handelInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicDateOfBirth" className='d-flex gap-4'>
                        <Form.Label style={{marginTop:'10px'}}>Date of Birth</Form.Label>
                        <Form.Control
                            type="date"
                            name="date_of_birth"
                            placeholder="Select date of birth"
                            value={formData.date_of_birth} 
                            onChange={handelInputChange} 
                            required
                            style={{flex:1}}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">Register</Button>

                </Form>
            </div>
        </>
    )
}
