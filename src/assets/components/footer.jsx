import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='main-footer-container'>
        <h1 className='footer-logo'>Yasir-Dev</h1>
        <div className="socail-media">
            <div className="icon"><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></div>
            <div className="icon"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
            <div className="icon"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></div>
        </div>
        <p className='copyright'>Copyright © 2026. All rights reserved.</p>
    </div>
  )
}

export default Footer