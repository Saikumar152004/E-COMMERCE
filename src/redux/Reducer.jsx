import {FETCH_PRODUCT_REQUEST,ADD_TO_CART, REMOVE_FROM_CART, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE,
 } from './Actiontype';

 
const initialState = {
    posts: [],
    cart:[],
    loading: false,
    error: null
  };

  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload,
          error: null
        };
      case FETCH_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };

        
        case ADD_TO_CART:
          const existingProductIndex = state?.cart.findIndex(item => item.id === action.payload.id);
          if (existingProductIndex > -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingProductIndex] = {
              ...updatedCart[existingProductIndex],
              quantity: action.payload.quantity,
            };
            return {
              ...state,
              cart: updatedCart,
            };
          } else {
            return {
              ...state,
              cart: [...state.cart, action.payload],
            };
          }
          
        case REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload),
          };
        
      default:
        return state;
    }
  };
  
export default Reducer;