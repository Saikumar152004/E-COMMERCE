import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
const [logindata, setLogindata] = useState({name:"", password:""});
const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();



const inputChange=(e)=>{
    setLogindata((prestate)=>{
      return{
        ...prestate,
        [e.target.name] : e.target.value
      }
    })
}
console.log(logindata)

const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Fetch user data from the server
      const response = await axios.get('http://localhost:3000/userData');
      const users = response.data;

      // Validate user credentials
      const user = users.find(
        (u) => u.name === logindata.name && u.password === logindata.password
      );

      if (user) {
        // Dispatch login action
        dispatch({ type: 'LOGIN_SUCCESS', payload: { name: user.name } });

        // Redirect to home page
        navigate('/Home');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Failed to login. Please try again later.');
    }
  };

  return (
    <div>
        <div className='row'>
    <div className='col-md-4 offset-md-4 card'>
        <form onSubmit={submitHandler}>
            <h2 className='text-center'> Login </h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className='form-group'>
                <input type="text" name="name" value={logindata.name} onChange={inputChange} className='form-control' placeholder='User Name' required/>
            </div>
             <div className='form-group'>
                <input type="text" name="password" value={logindata.password} onChange={inputChange} className='form-control' placeholder='Password' required/>
            </div>
            <div className='text-center'>
                <button className='btn btn-success'> Login </button>
            </div>
        </form>
         </div>
        </div>
          <div className='text-center mt-3'>
          <p> If not register Please <Link to="/Register">Sign up </Link> </p>
        </div>
    </div>
  )
}

export default Login