import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


function App() {
 
  return (
    <>
     <Header/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
