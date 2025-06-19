import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';
import axios from "axios";
const Update= () => {
    const { id } = useParams();
    const navigate = useNavigate();
  const [data, setdata] = useState({
    name:"",
    bookname:"",
    description: "",
    author: "",
    image: "",
    price: ""
  });
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE}/getBooks/${id}`)
      .then(res => setdata(res.data))
      .catch(err => console.log(err));
  }, [id]);
  const change =(e)=>{
    const { name, value }= e.target;
    setdata({...data, [name]: value})
  };
  const Summit = async(e)=>{
    e.preventDefault();
    try {
        await axios.put(`${process.env.REACT_APP_API_BASE}/updateBook/${id}`, data);
        alert("Book updated successfully");
        navigate("/"); // go back to main page
      } catch (err) {
        console.error("Update error:", err);
      }
  }
 
  return (
    <>
    <div className=' bg-dark d-flex justify-content-center align-items-start text-white py-3'>
        <h4>Update Section</h4>
      </div>
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{height:"92vh"}}>
        <form className="container p-5">
        <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white"> Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" onChange={change} value={data.name} />
  </div> 
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Book Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="bookname" onChange={change} value={data.bookname} />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Author Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="author" onChange={change} value={data.author}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Description</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="description" onChange={change} value={data.description}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">URL of Image</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="image" onChange={change} value={data.image}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Price</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="price" onChange={change} value={data.price}/>
  </div>
  
  <button type="submit" className="btn btn-primary button " style={{marginLeft:"35vw"  }} onClick={Summit}>Submit</button>
</form>
      
    </div>
    </>
  )
}

export default Update