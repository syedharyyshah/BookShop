import React from 'react'
import Navbar from '../Compnents/Navbar/navbar'
import Course from '../Compnents/Course/Course'
import Footer from '../Compnents/Footer/Footer'


const Cources = () => {
  return (
    <div>
      <Navbar/>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Course/>
      </div>
      <Footer/>
    </div>
  )
}

export default Cources
