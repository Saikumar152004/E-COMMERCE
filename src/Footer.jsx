import React from 'react'
import Logo from '../src/images/logo.jfif'
function Footer() {
  return (
    <div className='bg-footer  py-5 mt-5'>
        <div className='container'> 
        <div className='row'>
            <div className='col-md-6'> 
               <img src={Logo}/>
               <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur suscipit assumenda, maiores eligendi provident nobis repellat hic minus vero quos minima blanditiis ipsam tenetur quas autem unde? Id corporis molestias nisi temporibus optio suscipit iusto nostrum, laboriosam vitae quisquam beatae harum explicabo esse cumque odit animi officia? Non, aliquid. Eius vel magni iste et accusantium, quam asperiores, placeat, alias fugiat sint aperiam enim totam temporibus ex pariatur corrupti in.</p>
            </div>
            <div className='col-md-3'> 
                <h3 className='ml-3'> Quick Links</h3>
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Products </li>
                    <li> Services </li>
                    <li> Contact </li>
                    
                </ul>
            </div>
            <div className='col-md-3'> 
                <h3 > Our Address </h3>
                <div>
                    <h4> Ecommerce Building</h4>
                    <h4> Opp Kalamandin</h4>
                    <h4>Marathahalli </h4>
                    <h4> Banglore 560037</h4>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer