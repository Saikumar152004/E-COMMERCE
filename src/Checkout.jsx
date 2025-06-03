import React from 'react'
import { Link } from 'react-router-dom';
 function Checkout() {
  return (
    <div className='container my-5'>
        <h2> Checkout Page </h2>

        <div className='row'>
            <div className='col-md-6'>
            <div className='card p-5'>
                <h3> Delivery Address </h3>
               <div className='form-group'>
                <input type="text" className='form-control' placeholder='Name'/>
               </div>
               <div className='form-group'>
                <input type="text" className='form-control' placeholder='email'/>
               </div>
               <div className='form-group'>
                <input type="text" className='form-control' placeholder='Mobile'/>
               </div>
               <div className='form-group'>
                <input type="text" className='form-control' placeholder='Location'/>
               </div>
               <div className='form-group'>
                <input type="text" className='form-control' placeholder='land Mark'/>
               </div>
               <div className='form-group'>
                <input type="text" className='form-control' placeholder='Pincode'/>
               </div>
               <div className='text-center'>
                <button className='btn btn-success'> Submit </button>
               </div>
            </div>
            </div>
          
            <div className='col-md-6'>
            <div className='card p-4'>
                <h2> Payment Method </h2>
                <div>
                    <input type="radio" name="payment"/> Cash On Delivery &nbsp;  
                    <input type="radio" name="payment"/> Online 
                </div>
                </div>

                <div className='mt-5 text-right'>
                <Link to="/Success">
                    <button className='btn btn-success'> Proced To Payment </button>
                </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Checkout;