import React from 'react'
import { useState, useEffect } from 'react'
import './Navbar.css'
import images from '../../assets/images.js'

    const Navbar = () => {
        const [navbarBg, setNavbarBg] = useState(false);
      
        useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
              setNavbarBg(true);  
            } else {
              setNavbarBg(false); 
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

  return (
<nav className={`navbar container ${navbarBg ? 'bg-blue' : ''}`}>
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
