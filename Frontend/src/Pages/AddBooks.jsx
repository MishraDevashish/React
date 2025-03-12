import React from 'react'

const AddBooks = () => {
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{height:"92vh"}}>
        <form className="container p-5">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Book Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Author Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Description</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">URL of Image</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Price</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  
  <button type="submit" className="btn btn-primary button " style={{marginLeft:"35vw"}}>Submit</button>
</form>
      
    </div>
  )
}

export default AddBooks
