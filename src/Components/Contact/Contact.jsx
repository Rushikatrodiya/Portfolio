import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to new projects, so feel free to send me a message</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <p> <span>✉️</span> rushikatrodiya@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <p> <span>📞</span> +919054481897</p>
                    </div>
                    <div className="contact-detail">
                        <p> <span>🌐</span>GUJRAT, INDIA</p>
                    </div>
                </div>
            </div>
            <form  className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>

    </div>
  )
}

export default Contact