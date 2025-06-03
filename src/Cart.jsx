import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector(state => state.Reducer.cart);
  const dispatch = useDispatch();
  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + (product.productDetails.price * (product.quantity || 1));
    }, 0);
  };

  return (
    <div className='container'>
      <h2>  Cart Items </h2>
      <table border="1" className='w-100'>
        <tr>
          <th> S.No</th>
          <th> Image </th>
          <th> Product Name </th>
          <th> Price</th>
          <th> QTY</th>
          <th> total Price</th>
          <th> Action </th>
        </tr>
        {cart.map((product, index) => (
          <tr>
            <td> {index + 1}</td>
            <td>
              <img className="cart-img" src={product.productDetails.images} />
            </td>
            <td> {product.productDetails.title}</td>
            <td> {product.productDetails.price}</td>
            <td> {product.quantity}</td>
            <td>{product.productDetails.price * (product.quantity || 1)}</td>
            <td>
              <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
            </td>
          </tr>
        )

        )}
      </table>
      <div className='row mt-5'>
        <div className='col-md-6'> 
         <Link to="/Products">  
         <button className='btn btn-success'> Go Products </button>
         </Link>
        </div>
        <div className='col-md-6 text-right'>
        <Link to="/Checkout"> 
          <button className='btn btn-success'> Checkout </button>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default Cart