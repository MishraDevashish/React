import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import BookSection from '../Component/BookSection'
import './Books.css'

const Books = () => {
    const [Data, setData] = useState()
    useEffect(() => {
      const fetch =async()=>{
        await axios.get("http://localhost:3000/api/v1/getBooks").then((res)=> setData(res.data.books))
      }
     fetch();
    }, [])
    
  return (
    <div className="bg-dark no-scrollbar" style={{height:"92vh",overflow:"auto"}}>
      <div className='d-flex justify-content-center align-items-start text-white py-3 no-scrollbar'>
        <h4>Books Section</h4>
      </div >
      {Data ?
       ( <BookSection book={Data}/>) : (<div className='text-white'>Loading</div>)}
    </div>
  )
}

export default Books
