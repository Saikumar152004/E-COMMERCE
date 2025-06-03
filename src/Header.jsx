import React from 'react'
import { Link } from "react-router-dom";
import Logo from './images/logo.jfif'
import { useSelector, useDispatch } from 'react-redux';


function Header() {
     const cart = useSelector(state => state.Reducer.cart);
     const user = useSelector((state) => state.UserReducer?.loggedInUser || null);
      let totalQuantity = 0
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' }); // Clear the user from Redux
    navigate('/Login'); // Redirect to the login page
  };

  if(cart) {
    for(const product of cart) {
      totalQuantity += product.quantity
    }
  }
  return (
    <div>
         <nav className='container-fluid'>
        <ul className='menu'>
          <li>
            <Link to="/Home">
            <img  className="logo-1" src={Logo}/>
            </Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link >
            {user ? (
            <div onClick={handleLogout}>Logout</div>
          ) : (
            <Link to="/Login" >Login</Link>
          )}
            </Link>
          </li>
           <li>
            <Link to="/Cart">Cart : {totalQuantity}</Link>
          </li>
           <li>
            <div> User: {user ? user.name : ''}</div>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Header