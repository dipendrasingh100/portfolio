import React from 'react'
import "../styles/about.css"
import resume from "../assets/Dipendra_FullStack_Resume.pdf"
import profile from "../assets/profile.jpeg"

const About = () => {
  return (
    <div className='about-container' id='about'>
      <div className="profile" data-aos="fade-right">
        <div className="image">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className="detail" data-aos="fade-left">
        <h2 className='about'>ABOUT ME</h2>
        <p>Energetic computer science graduate skilled in full stack development. Proficient in front-end technologies including HTML, CSS, JavaScript, and React.js, complemented by back-end expertise inPython, Flask, Django, SQL, and MongoDB. Demonstrated ability to excel within collaborative teams while swiftly adapting to new technologies.</p>
        <a className='btn' href={resume} download>RESUME</a>
      </div>
    </div>
  )
}

export default About
