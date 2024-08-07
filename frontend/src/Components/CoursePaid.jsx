import React, { useEffect, useState } from 'react'
import Card from './Card'

import axios from 'axios'
const CoursePaid = () => {
  const [book,setbook]=useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
    const res = await axios.get("http://localhost:8000/book")
    console.log(res.data)
    console.log(res);
    setbook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
   <>
   
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
 <div className='mt-28 items-center justify-center text-center'>
  <h1 className='text-2xl font-semibold md:text-4xl'>Some paid Courses</h1>
  <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio, ea earum recusandae alias, distinctio quidem harum porro illo corporis molestiae vel laudantium magni sit, ratione quaerat minus atque quod!</p>
 </div>

 <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
  {
    book.map((item)=>{
     return <Card key={item.id} item={item}></Card>
    })
  }
 </div>
    </div>
   </>
  
  )
}

export default CoursePaid
