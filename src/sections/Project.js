import React from 'react'
import "../styles/projects.css"
import blogImg from "../assets/blog.jpg"
import frasImg from "../assets/fras.jpg"
// import cartImg from "../assets/e-commerce.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Project = () => {
  return (
    <div className='project-container' id='projects'>
      <h1 className='mb-20'>PROJECTS</h1>
      <div className="projects">
        <div className="project" data-aos="fade-up">
          <img src={blogImg} alt="cart" className='project-img' />
          <div className="layer">
            <h3>Blog App(React)</h3>
            <p>Discover the latest happenings in Bollywood, Hollywood, fitness, food, and technology with our dynamic blog app. Stay updated with engaging and informative posts on all your favorite topics, brought to you in one convenient platform</p>
            <div>
              <a href="https://github.com/dipendrasingh100/React-Blog-App" target='_blank' rel='noreferrer'>
                <button className='Btn'>
                  <div className='sign'>
                    <FontAwesomeIcon icon={faCode} size="lg" style={{ color: "#ffffff", }} />
                  </div>
                  <div className="text">Code</div>
                </button>
              </a>
              <a href="https://dipendra-blog-app.netlify.app/" target='_blank' rel="noreferrer">
                <button className='Btn'>
                  <div className='sign'>
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" style={{ color: "#ffffff", }} />
                  </div>
                  <div className="text">Demo</div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project" data-aos="fade-up">
          <img src={frasImg} alt="cart" className='project-img' />
          <div className="layer">
            <h3>Face Recognition Based Attendance System</h3>
            <p>A face recognition-based attendance system automates attendance tracking by utilizing facial recognition technology. It accurately identifies and marks students' presence in real-time, eliminating the need for manual record-keeping and enhancing efficiency for educational institutions.</p>
            <div>
              <a href="https://github.com/dipendrasingh100/FRAS" target='_blank' rel="noreferrer">
                <button className='Btn'>
                  <div className='sign'>
                    <FontAwesomeIcon icon={faCode} size="lg" style={{ color: "#ffffff", }} />
                  </div>
                  <div className="text">Code</div>
                </button>
              </a>
              <a href="https://www.google.com/" >
                <button className='Btn'>
                  <div className='sign'>
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" style={{ color: "#ffffff", }} />
                  </div>
                  <div className="text">Demo</div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
