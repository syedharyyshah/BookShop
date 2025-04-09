import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cources from './Cources/Cources'
import SignUp from './Compnents/Login/SignUp'
import Contacts from './Contacts/Contacts'
import Abouts from './Abouts/Abouts'
import Login from './Compnents/Login/Login'



const App = () => {
  return (
    <div className='bg-gray-100 dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Course' element={<Cources/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path='/Contact' element={<Contacts/>}/>
      <Route path='/About' element={<Abouts/>}/>      
     </Routes>
    </div>
  )
}

export default App
