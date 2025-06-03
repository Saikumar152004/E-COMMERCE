import React,{useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Services() {
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((json)=> setData(json))
  },[])

  const serviceDetails=(e)=>{
  navigate('/Servicedetails', {state:e})
  }

  return (
    <div className='container'>
      <div className='row'> 
        {data.map((e)=>(
          <div className='col-md-4'>
            <div className='card mb-4'> 
             {e.id} {e.title}
             <button onClick={()=> serviceDetails(e)}className='btn btn-success'> Read More..</button> 
             </div>
             </div>
        ))}
      </div>
    </div>
  )
}

export default Services