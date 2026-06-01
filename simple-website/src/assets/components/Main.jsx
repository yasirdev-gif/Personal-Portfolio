

import React from 'react'
import './main.css'

const Main = () => {
    
    
  return (
    <div className='mega-container'>
      <div className='main-container'>
        <div className="freelance">
             <div className='blinking-text'>
        </div>
        <h5 className='available'> Available For Freelance</h5>
       

        </div>
        <h1 className='title'>Hi, I'm <span className='word'>Yasir</span>, a Front-End <br /> Developer building <br /> <span className='word1'>precise</span> digital <br /> experiences.</h1>

        <p className='para'>I create responsive and user-friendly websites that provide an excellent user experience.Specializing in high-performance web applications where technical rigor meets sophisticated aesthetics. I architect code like a gallery, clean and modular.</p>

       

       <div className="btns">
        <button className='btn1'>View My Work </button>
        <button className='btn2'>Contact Me</button>
       </div>
    </div>


  <div className="code-container">
  <pre className="code-pre">
    <code className="code">
      <div><span className="keyword">const</span> <span className="variable">Developer</span> = {'{'}</div><br />
       <div><span className="property">name</span>: <span className="string">"Yasir"</span>,</div><br />
      <div><span className="property">focus</span>: <span className="string">"UI/UX & Front-End"</span>, </div><br />
       <div><span className="property">role</span>: <span className="string">"Front-End Developer"</span>,</div> <br />
        <div><span className="property">skills</span>: [<span className="string">"React"</span>, <span className="string">"JS"</span>, <span className="string">"CSS"</span>, <span className="string">"HTML"</span>],</div><br />
      {'};'}
    </code>
  </pre>
</div>
    
    </div>
  )
}

export default Main




