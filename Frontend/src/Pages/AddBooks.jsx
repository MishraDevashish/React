import React from 'react'
import { useState } from 'react';
import axios from "axios";
const AddBooks = () => {
  const [data, setdata] = useState({
    name: "",
    bookname: "",
    description: "",
    author: "",
    image: "",
    price: ""
  });
  const change = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value })
  };
  const Summit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/v1/add", data).then((res) => { console.log(res) })
    setdata({
      name: "",
      bookname: "",
      description: "",
      author: "",
      image: "",
      price: ""
    })
  }

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: "92vh" }}>
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
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="author" onChange={change} value={data.author} />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-white">Description</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="description" onChange={change} value={data.description} />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-white">URL of Image</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="image" onChange={change} value={data.image} />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-white">Price</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="price" onChange={change} value={data.price} />
        </div>

        <button type="submit" className="btn btn-primary button " style={{ marginLeft: "35vw" }} onClick={Summit}>Submit</button>
      </form>

    </div>
  )
}

export default AddBooks
