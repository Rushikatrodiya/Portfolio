import React from 'react'
import './Hero.css'
import profile_img from'../../assets/image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Rushi Katrodiya,</span> Fronted developer based in India.</h1>
        <p>I am a fronted developer from India, while i am fresher but i make many project with the react,so i can say that i am passionate react js developer</p>
        <div className="hero-action">
            <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='contact'>Connect with me</AnchorLink>
            </div>
            <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            My Resume
          </a>
        </div>
    </div>
  )
}

export default Hero