import {LOGIN_SUCCESS, LOGOUT} from './Actiontype';

const initialState = {
    loggedInUser: null, // Store user info after login
  };

function UserReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, loggedInUser: action.payload }; // Save logged-in user
      case 'LOGOUT':
        return { ...state, loggedInUser: null }; // Clear user info on logout
      default:
        return state;
    }
  }
  export default UserReducer;
  