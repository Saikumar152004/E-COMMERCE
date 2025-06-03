import {FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, ADD_TO_CART, REMOVE_FROM_CART, FETCH_PRODUCT_FAILURE,
 } 
from './Actiontype';

import axios from 'axios';



export const fetchProducts = () => {
    return dispatch => {
      dispatch(fetchProductRequest());
      
      axios.get('https://dummyjson.com/products') 
        .then(response => {
          dispatch(fetchProductSuccess(response.data));
        })
        .catch(error => {
          dispatch(fetchProductFailure(error.message));
        });
    };
  };

    
const fetchProductRequest = () => ({
    type: FETCH_PRODUCT_REQUEST
  });

  
  const fetchProductSuccess = data => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: data
  });

  
  const fetchProductFailure = error => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  });

   
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});