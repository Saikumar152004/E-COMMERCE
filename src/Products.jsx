import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,addToCart,
  removeFromCart,
} from "../src/redux/Action";

function Products({ setSelectedProduct }) {

   const productData = useSelector((state) => state.Reducer.posts);
    const cart = useSelector((state) => state.Reducer.cart);
  const [qty, setQty] = useState({});

   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const cartQty = cart?.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    setQty(cartQty);
  }, [cart]);

  const handleSelectedProduct = (product) => {
    setSelectedProduct(product);
  };

   const incrementQty = (productID, productDetails) => {
    setQty((prevQty) => {
      const updatedQty = { ...prevQty };
      const newQty = (prevQty[productID] || 0) + 1;
      updatedQty[productID] = newQty;
      dispatch(
        addToCart({
          id: productID,
          quantity: newQty,
          productDetails: productDetails,
        })
      );
      return updatedQty;
    });
  };

  const decrementQty = (productID) => {
    setQty((prevQty) => {
      const updatedQty = { ...prevQty };
      const currentQty = updatedQty[productID];
      if (currentQty > 1) {
        const newQty = currentQty - 1;
        updatedQty[productID] = newQty;
        dispatch(addToCart({ id: productID, quantity: newQty }));
      } else {
        delete updatedQty[productID];
        dispatch(removeFromCart(productID));
      }
      return updatedQty;
    });
  };


  return (
    <div className='container'>
      <h2 className='text-center'> Products </h2>
      <div className='row'> 
{productData?.products?.map((e)=>(
    <div className='col-md-4 text-center'> 
    <div className='card mb-3'> 
       <Link to={`/Products/${e.id}`}>
       <div onClick={() => handleSelectedProduct(e)}> 
      <img className='product-img' src={e.images}/>
      <h3>  {e.title} </h3>
      <h2> Price : {e.price}</h2>
      </div>
      </Link>
      {/* <button className='btn btn-success'> AddtoCart </button> */}
      {qty[e.id] ? (
                <div className="row">
                  <div className="col-md-3">
                    <button
                      onClick={() => decrementQty(e.id)}
                      className="btn btn-success btn-block"
                    >
                      -
                    </button>
                  </div>
                  <div className="col-md-6">{qty[e.id]}</div>
                  <div className="col-md-3">
                    <button
                      onClick={() => incrementQty(e.id, e)}
                      className="btn btn-success btn-block"
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => incrementQty(e.id, e)}
                    className="btn btn-success btn-block"
                  >
                    Add to Cart
                  </button>
                </div>
              )}
    </div>
   </div>
  ))}
      </div>
  

    </div>
  )

}

export default Products