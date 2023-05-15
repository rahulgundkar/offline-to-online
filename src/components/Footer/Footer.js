import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <>
<div className='footer-container bg-dark'>
  <div className='footer-container-child'>
    <div className='footer-heading'>
   <h1>OFFLINE TO ONLINE</h1>
   </div>
   <div className='nav-cont'>
   <a href='./Form.js' className='footer-link'>Form</a>
   <a href='./Form.js' className='footer-link'>Form</a>
   <a href='./Form.js' className='footer-link'>Form</a>
   <a href='./Form.js' className='footer-link'>Form</a>

   </div>
   <div className='footer-logo-cont'>
    <div className='fooetr-logo'> <img src='./image\footer-img\twitter.png'></img></div>
    <div className='fooetr-logo'> <img src='./image\footer-img\instagram (3).png'></img></div>
    <div className='fooetr-logo'> <img src='./image\footer-img\youtube (1).png'></img></div>
   </div>
   </div>
  </div>


    </>
  )
}

export default Footer