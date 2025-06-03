import React from 'react'

function Contact() {
  return (
    <div className='container'>
      <h2 className='text-center'>Contact</h2>

      <div className='row'>
        <div className='col-md-6'>
          <div class="">
            <h3>Office Address</h3>
            <p class="mt-2">MINDX Solutions 25, 3rd Floor, Karna Sree Point Opposite Kalamandir Outer Ring
              Road, Service Rd, Marathahalli, Bengaluru, Karnataka 560037</p>
            <h3 class="mt-2">General Enquiries</h3>
            <p class="mt-2">solutionsmindx@gmail.com</p>
            <h3 class="mt-2">Call Us</h3>
            <p class="mt-2">PH:+91-9676505969</p>
            <h3 class="mt-2">Our Timing</h3>
            <p class="mt-2">Mon - Sat : 08:00 AM - 09:00 PM / 12:00 AM - 12:00 AM
              Sun : Closed / 12:00 AM - 12:00 AM</p>
          </div>
        </div>
        <div className='col-md-6'>
          <form className="card mt-5">
            <h2 className='text-center'>Fill the Form</h2>
            <div>
              <input type='text' placeholder='Enter Your Name' className="form-control mt-2" />
            </div>
            <div>
              <input type='mail' placeholder='Enter Email Address' className="form-control mt-2" />
            </div>
            <div>
              <input type='number' placeholder='Enter Mobile Number' className="form-control mt-2" />
            </div>
            <div>
              <button className='mt-3 btn btn-success btn-block'>Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
export default Contact