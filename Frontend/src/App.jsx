import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cources from './Cources/Cources'
import SignUp from './Compnents/Login/SignUp'
import Contacts from './Contacts/Contacts'
import Abouts from './Abouts/Abouts'
import Login from './Compnents/Login/Login'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider'



const App = () => {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <div className='bg-gray-100 dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Course' element={authUser?<Cources/>:<Navigate to="/Signup"/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path='/Contact' element={<Contacts/>}/>
      <Route path='/About' element={<Abouts/>}/>      
     </Routes>
     <Toaster />
    </div>
  )
}

export default App
