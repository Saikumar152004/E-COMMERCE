import React,{useState} from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
// import About from './About';
// import Products from './Products'
import Services from './Services';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Cart from './Cart'
import Nopage from './Nopage';
import Servicedetails from './Servicedetails'
import Productdetails from './Productdetails'
import Checkout from './Checkout'
import Success from './Success'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.js'

import Store from './redux/Store.jsx'

import { Provider } from 'react-redux';
import Loder from './Loder'
const LazyProducts = React.lazy(()=> import('./Products'))
const LazyAbout = React.lazy(()=> import('./About'))

export default function Ecommerce() {

  const [selectedProduct, setSelectedProduct]= useState(null)
  return (
    <Provider store={Store}> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Home" element={<Home />} />
          {/* <Route path="About" element={<About />} /> */}

          <Route path="About" element={
            <React.Suspense  fallback={<Loder/>}>
            <LazyAbout />
           </React.Suspense>
          } />

          {/* <Route path="Products" element={<Products setSelectedProduct={setSelectedProduct}/>} /> */}

          <Route path="Products" element={
            <React.Suspense  fallback={<Loder/>}>
            <LazyProducts setSelectedProduct={setSelectedProduct}/>
           </React.Suspense>
          } />
         
         
          <Route path={`products/:id`} element={<Productdetails product={selectedProduct}/>} />
          <Route path="Services" element={<Services />} />
          <Route path="Servicedetails" element={<Servicedetails />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="Success" element={<Success />} />
          <Route path="Loder" element={<Loder />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ecommerce />
  </StrictMode>,
)
