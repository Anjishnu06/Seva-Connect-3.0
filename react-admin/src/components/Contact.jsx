import React from 'react';
import style from './Contact.css'

function Contact() {
  return (
    <>
      <div className='contact-form'>
        <div className='first'>
          <div className='heading'>
            <h1>Get in touch with us</h1>
          </div>
          <div className='mid'>
            <h4>Smart India Hackethon</h4>
            <p>rotterdam nethlrands<br/>31(0)850830830<br/>prku21ainds@cmrit.ac.in</p>
          </div>
          <div className='end'>
            <h4>Smart India Hackethon</h4>
            <p>rotterdam nethlrands<br/>31(0)850830830<br/>prku21ainds@cmrit.ac.in</p>
            <p></p>
          </div>
        </div>
        <button className='btn' id="butt">Contact Us</button>
      </div>
    </>
  )
}

export default Contact
