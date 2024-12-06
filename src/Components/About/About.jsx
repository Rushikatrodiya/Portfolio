import React from 'react'
import './About.css'
import theme_patt from '../../assets/icon.png'
import profile_img from '../../assets/image.png'
function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={theme_patt} alt="" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a fresher Fronted develper.</p>
                    <p>My passion for fronted development is not only</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS </p> <hr style={{width:"30%"}}/></div>
                    <div className="about-skill">    
                        <p>React JS </p> <hr style={{width:"90%"}}/></div>
                    <div className="about-skill">   
                        <p>JavaScript </p> <hr style={{width:"50%"}}/></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>FRESHER</h1>
            </div><hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects</p>
            </div>
        </div>
    </div>
  )
}

export default About