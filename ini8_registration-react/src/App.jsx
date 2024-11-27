import React from 'react'
import Navbar from './pages/navbar/Navbar'
import Dashboard from './pages/userDashboard/Dashboard'
import Register from './pages/registerUser/Register'
import Nomatch from './pages/nomatch/Nomatch'
import { Route, Routes } from 'react-router-dom'
import UpdateUser from './pages/userDashboard/UpdateUser'
import Welcome from './pages/welcome/welcome'


export default function App() {
  return (
   <>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/registerform' element={<Register/>}/>
        <Route path='/registerform/:id' element={<UpdateUser/>}/>
        <Route path='*' element={<Nomatch/>}/>
     </Routes>
   </>
  )
}
