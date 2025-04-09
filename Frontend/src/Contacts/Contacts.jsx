import React from 'react'
import Navbar from '../Compnents/Navbar/navbar'
import Footer from '../Compnents/Footer/Footer'
import Contact from '../Compnents/Contact/Contact'

const Contacts = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacts
