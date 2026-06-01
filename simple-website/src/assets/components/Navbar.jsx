import React from 'react'
import Projects from './projects'
// import cv from '../public/Muhammad_Yasir_Siddique_CV_Airblue.pdf'


import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-con'>
        <h1 className='logo'>Yasir-Dev</h1>
        <ul className='nav-links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>


            <button className='nav-btn'>
            resume
            </button>


    </div>
  )
}

export default Navbar