import React from 'react'

function Productdetails({ product }) {
console.log(product)
  return (
    <div className='container'>
      <div className='row'>
            <div className='col-md-5'> 
                <img className="detail-img" src={product?.images}/>
            </div>
            <div className='col-md-7'> 
                 <h3> {product?.title}</h3>
                 <h3> Category: {product?.category}</h3>
                 <h3> Brand: {product?.brand}</h3>
                 <h3> Price: {product?.price}</h3>
                 <h3> Rating: {product?.rating}</h3>
                 <p> Stocks: {product?.stock}</p>
                 <p> Warranty: {product?.warrantyInformation}</p>
            </div>
      </div>

      <div>
        <p> {product?.description}</p>
      </div>

      <div>
        {product?.reviews.map((e)=>(
            <div className='mb-3'> 
                <div> Rating: {e.rating}</div>
                <div> {e.comment} </div>
                <b> {e.reviewerName}</b>
            </div>
        ))}
      </div>
        
    </div>
  )
}

export default Productdetails