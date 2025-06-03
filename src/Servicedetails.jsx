import React from 'react'
import { useLocation } from 'react-router-dom'

function Servicedetails() {
     const data = useLocation();

  return (
    <div className='container'>
        <h2> Service Details </h2>
        <h2> {data.state.id}</h2>
        <h2> {data.state.title}</h2>
        <h2> {data.state.body}</h2>
    </div>
  )
}

export default Servicedetails