
import React from 'react'
import "./Home.css"
import img from "../Images/img1.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
      <div className="Home-Page bg-dark text-white container-fulid d-flex justify-content-center align-items-center flex-column" >
        <div className="row container " >
            <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column  " style={{height:"91vh"}}>
              <h2 className='h2'>EBOOK SITE </h2>
              <div className="d-flex">
              <h3 style={{fontSize: "40px"}}>THE UNLIMITED BOOKS</h3>
              </div>
              
              <Link className='view' to="/Books"> View Books</Link>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column " style={{height:"91vh"}}>
                <img className="img-fluid rounded " src={img} alt="/" />
            </div>
        </div>
  
    </div>
    
  )
}

export default Home
