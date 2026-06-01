import React from 'react'
import img1 from '/public/icons8-react-80.png'
import img2 from '/public/java-script.png'
import img3 from '/public/css-3.png'
import img4 from '/public/social.png'
import img5 from '/public/html5.png'
import './about.css'

const About = () => {
  return (
    <div className='about'>
        <div className="aboutwork">
            <h4 className='first-heading'>Digital Architect</h4>
            <h1 className='title'>
                Designing <br /> logic, crafting <br /> <span className='word'>experiences.</span>
            </h1>

            <p className="para para1">
                I am a senior frontend engineer dedicated to building high-performance, accessible, and aesthetically rigorous web applications. With a foundation in architectural design, I approach code as a structural discipline.
            </p>

            <p className="para para2">
                Based in the intersection of engineering and creativity, I specialize in transforming complex data requirements into seamless user journeys. My work is defined by precision, modularity, and a relentless focus on the end-user experience.
            </p>

            <div className="buttons">
                <button className="btnss resume">Download Resume</button>
                <button className="btnss contact">Lets Talk</button>
            </div>
        </div>

        <div className="skills">
            <h1 className='skills-head'>Technical Arsenal</h1>
            <div className="boxex">
                <div className="box1">
                     <img src={img1} alt="React" className='skill-img' />
                <h6>React</h6>
                <p className='skill-decs'>Component Architecture</p>
                </div>
                <div className="box1">
                     <img src={img2} alt="JavaScript" className='skill-img' />
                <h6>JavaScript</h6>
                <p className='skill-decs'>Modern ES6+</p>
                </div>
                <div className="box1">
                     <img src={img3} alt="CSS3" className='skill-img' />
                <h6>CSS3</h6>
                <p className='skill-decs'>Layouts & Animations</p>
                </div>
                <div className="box1">
                     <img src={img4} alt="Git" className='skill-img' />
                <h6>Social</h6>
                <p className='skill-decs'>Version Management</p>
                </div>
                <div className="box1">
                     <img src={img5} alt="HTML5" className='skill-img' />
                <h6>HTML5</h6>
                <p className='skill-decs'>Semantic Structures</p>
                </div>
               
               
            </div>

        </div>
    </div>
  )
}

export default About