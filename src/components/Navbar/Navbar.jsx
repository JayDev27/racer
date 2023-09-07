import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className='first'>
            <img src="./assets/schooled.png" alt="" className='logo' />
        </div>
        <div className='second'>
            <a href=""className='links'>Home</a>
            <a href="#about"className='links'>About</a>
            <a href="#services"className='links'>Services</a>
            <a href="#testimonials"className='links'>Testimonials</a>
            <a href=""className='links'>Contact</a>
        </div>
        <div className='third'>
        <i className="fa-solid fa-phone icon"></i>
        <i className="fa-regular fa-envelope icon"></i>
        <i className="fa-brands fa-github icon"></i>
        <i className="fa-brands fa-linkedin-in icon"></i>
        </div>
    </nav>
  )
}

export default Navbar