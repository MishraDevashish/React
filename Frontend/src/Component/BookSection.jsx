import React from 'react'

const BookSection = ({ book }) => {
    console.log(book)
    return (
        <div className="d-flex justify-content-around align-items-center flex-wrap">
            {book && book.map((item, index) => (
                <div key={index} className='' style={{ width: "20vw", height: "60vh", backgroundColor: "yellowgreen", padding: "5px" }}>
                <div style={{ width: "100%", height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img 
                        src={item.image} 
                        alt={item.bookname} 
                        style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                    />
                </div>
                <h6 className="text-white">{item.bookname}</h6>
                <p className='text-white'>Rs. {item.price}</p>
            </div>
            ))}
        </div>
    )
}

export default BookSection
