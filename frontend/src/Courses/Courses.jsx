import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CoursePaid from '../Components/CoursePaid'

import lists from '../assets/lists.json'

const Courses = () => {
    console.log(lists)
  return (
    <>

    <Navbar></Navbar>
   <div className='min-h-screen'>
   <CoursePaid></CoursePaid>
    </div>
    <Footer></Footer>
      
    </>
  )
}

export default Courses
