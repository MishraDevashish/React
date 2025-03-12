import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/home'
import AddBooks from './Pages/AddBooks'
import Books from './Pages/Books'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Footer from './Component/Footer'
function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books/>}/>
        <Route path="/AddBooks" element={<AddBooks/>}/>

      </Routes>
      <Footer/>
    </Router>
    
   

    
    
  )
}

export default App
