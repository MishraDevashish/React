
import React from 'react'
import "./Home.css"
import img from "../Images/img1.jpg"

const Home = () => {
  return (
    <div>
      <div className="Home-Page bg-dark text-white container-fulid d-flex justify-content-center align-items-start flex-column">
        <div className="row container   ">
            <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column  " style={{height:"91vh"}}>
              <h2 className='h2'>EBOOK SITE ENJOY THE UNLIMITED BOOKS</h2>
              <button className='view'> View Books</button>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column" style={{height:"91vh"}}>
                <img className="img-fluid rounded " src={img} alt="/" />
            </div>
        </div>
  
    </div>
    </div>
  )
}

export default Home
