import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className='main-contact-container'>

            <div className="first-box">
                <h6 className='just-upper'>AVAILABLE FOR HIRE</h6>
                <h1 className='heading'>Let's build <br /> something <br /> <span className='highlight'>together.</span></h1>

                <p className='contact-para'>Whether you have a specific project in mind or just <br /> want to chat about the latest in front-end architecture, <br /> I'm always open to new connections.</p>

                <div className="social-boxex">
                    <div className="first">
                        <div className="icon">

                        </div>
                        <div className="text">
                            <h6>EMAIL</h6>
                            <p>yasirgfx5@gmail.com</p>
                        </div>
                    </div>
                    <div className="first">
                        <div className="icon">

                        </div>
                        <div className="text">
                            <h6>Github</h6>
                            <p>yasirgfx5@gmail.com</p>
                        </div>
                    </div>
                    <div className="first">
                        <div className="icon">

                        </div>
                        <div className="text">
                            <h6>LinkedIn</h6>
                            <p>yasirgfx5@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="second-box">
                <form action="" className='contact-form'>
                    <div className="name-and-email">

                        <div className='boxxx name-and'>
                            <h2 className='name'>Full name</h2>
                            <input className='name-input' type="text" placeholder='Name' />
                        </div>
                        <div className="boxxx email-and">

                            <h2 className='email'>Email</h2>
                            <input className='email-input' type="email" placeholder='Email' />
                        </div>
                    </div>
                     
                     <div className="boxxx subject-box">

                    <h2 className='Subject'>Subject</h2>
                    <select id="inquiry" name="">
                        <option value="mercedes">Just Saying hi</option>
                        <option value="audi" selected>Project Inquiry</option>
                        <option value="saab">Speaking Engagement</option>
                        <option value="saab">Collaboration</option>
                    </select>

                     </div>

                    <div className="boxxx message-box">
                        
                    <h2 className='message'>Your Message</h2>
                    <textarea className='message-input' name="" id="" cols="30" rows="10" placeholder=''></textarea>
                    </div>
                    <button type='submit' className='button'>Send Message</button>
                    
                </form>
            </div>

        </div>
    )
}

export default Contact