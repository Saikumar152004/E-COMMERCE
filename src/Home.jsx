import React from 'react'


import Banner1 from './images/banner1.jfif'
import Banner2 from './images/banner2.jfif'
import Banner3 from './images/banner3.jfif'
import About from './About'
import Products from './Products'

function Home() {
  return (
    <div >
<div id="demo" class="carousel slide" data-ride="carousel">

  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Banner1} alt="Ecommerce" className='banner-img'/>
    </div>
    <div class="carousel-item">
      <img src={Banner2} alt="Ecommerce" className='banner-img'/>
    </div>
    <div class="carousel-item">
     <img src={Banner3} alt="Ecommerce" className='banner-img'/>
    </div>
  </div>
  
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

<div className='mt-5'> 
<About/>
</div>

<section className='text-center bg-info text-white py-5 mt-5'>
  <h2> UPTO 50% Offer </h2>
</section>

<section >
  <div className="text-center mt-5"> 
 <h2> Top Selling Products </h2>
  </div>

  <Products />
 
</section>


    </div>
  )
}

export default Home