import React from 'react'
import Aboutimg from './images/banner1.jfif'

function About() {
  return (
    <div className='container'>
      <div className='row'> 
      <div className='col-md-6'> 
        <img className='about-img' src={Aboutimg}/>
      </div>
      <div className='col-md-6'> 
        <h2> About Ecommerce </h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, soluta tenetur nulla molestiae atque nostrum eum magnam blanditiis unde nobis commodi sunt nemo. Laboriosam, ipsum enim. Repellat odit, voluptates corporis ea itaque quisquam rerum necessitatibus quae molestiae voluptatum libero debitis culpa distinctio consequuntur. Ex quos aperiam, officiis blanditiis aut totam culpa, voluptatibus fugiat iusto, vero quidem. Quis, libero. Voluptatibus est doloribus at aut dolorem temporibus ut dignissimos quam. Dolore iste fugiat dicta voluptate molestias eius explicabo beatae aliquam, deleniti quas, asperiores quisquam nostrum natus quibusdam, soluta vitae animi dolores nulla ipsam cum. Delectus, praesentium. Maxime accusantium ducimus provident unde neque.</p>

         </div>
      </div>
    </div>
  )
}

export default About