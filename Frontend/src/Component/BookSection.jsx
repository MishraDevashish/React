import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
const BookSection = ({ book }) => {
    console.log(book)

    const navigate = useNavigate();
    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
      };
    

    const handleDelete = async (id) => {
        try {

          const res = await axios.delete(`${process.env.REACT_APP_API_BASE}/delete/${id}`);
          alert(res.data.message);
          setBooks(books.filter(book => book._id !== id));  // Remove deleted book from state
        } catch (error) {
          console.error("Error deleting book:", error);
        }
      };
    
    return (
        <div className="d-flex justify-content-around align-items-center flex-wrap" >
            {book && book.map((item, index) => (
                <div key={index} className='' style={{ width: "20vw", height: "70vh", backgroundColor: "transparent", padding: "15px",border: "1px solid white ", marginBottom:"15px" }}>
                <div style={{ width: "100%", height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img 
                        src={item.image} 
                        alt={item.bookname} 
                        style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                    />
                </div>
                <h6 className="text-white">{item.bookname.slice(0,30)}.....</h6>
                <b className='text-white'>Rs. {item.price}</b>\
                <div className='d-flex justify-content-around align-item-center '>
                <button type="button" class="btn btn-primary" onClick={()=>handleUpdate(item._id)}>UPDATE</button>
                <button type="button" class="btn btn-danger" onClick={()=>handleDelete(item._id)}>DELETE</button>

                </div>
                
            </div>
            ))}
        </div>
    )
}

export default BookSection
