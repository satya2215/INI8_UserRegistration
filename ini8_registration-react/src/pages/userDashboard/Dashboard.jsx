import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {

    const [user, setUser] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8080/ini8/users")
                setUser(response.data);
            }

            catch (error) {
                console.log(error);
            }
        }

        fetchUsers()

    }, [])
    // console.log(user)

    //handel delete logic
    const handelDelete = async (id) => {

        try {
            const response = await axios.delete(`http://localhost:8080/ini8/userDelete/${id}`)
             
            if(response.status >= 200 && response.status < 300){
                setUser((prevUser)=>{
                    return prevUser.filter((user)=>user.id!==id)
                })
            }
        }
        catch (error) {
            console.log(error);

        }

    }
    const handelUpdate=(id)=>{
        navigate(`/registerform/${id}`)
    }



    return (
        <>
            <Container>
                <Row>
                    <Col style={{paddingTop:"40px"}}>
                        <h2 className='text-center'> USER DETAILS</h2>
                        <Table striped hover responsive bordered>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date of Birth</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((u) => {
                                        console.log(u.id);
                                        return (
                                            <tr key={u.id}>
                                                <td>{u.name}</td>
                                                <td>{u.email}</td>
                                                <td>{u.date_of_birth}</td>
                                                <td>
                                                    <Button variant='outline-secondary'
                                                    onClick={()=>{handelUpdate(u.id)}}
                                                    >Update</Button>{" "}
                                                    <Button variant='outline-danger'
                                                        onClick={() => { handelDelete(u.id) }}
                                                    >Delete</Button>
                                                </td>
                                            </tr>

                                        )

                                    })
                                }

                            </tbody>

                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
