import React from 'react'
import './Navbar.css'
import images from '../../assets/images.js'

const Navbar = () => {
  return (
<nav className='navbar container' >
    <img src={images.logo} alt="" className='logo' />
    <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn' >Contact Us</button></li>
    </ul>
</nav>
  )
}

export default Navbar
