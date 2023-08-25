import React from 'react'
import "../styles/projects.css"
import blogImg from "../assets/blog.jpg"
import frasImg from "../assets/fras.jpg"
import cartImg from "../assets/e-commerce.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Project = () => {
  return (
    <div className='project-container' id='projects'>
      <h1 className='mb-20'>PROJECTS</h1>
      <div className="projects">
        <div className="project" data-aos="fade-up"
        >
          <img src={cartImg} alt="cart" className='project-img' />
          <div className="layer">
            <h3>E-Commerce Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur quia suscipit!</p>
            <div>
              <a href="">
                <button className='Btn'>
                  <div className='sign'>
                    <FontAwesomeIcon icon={faCode} size="lg" style={{ color: "#ffffff", }} />
                  </div>
                  <div className="text">Code</div>
                </button>
              </a>
              <a href="" >
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
        <div className="project" data-aos="fade-up"
        >
          <img src={blogImg} alt="cart" className='project-img' />
          <div className="layer">
            <h3>Blog App</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur quia suscipit!</p>
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
        <div className="project" data-aos="fade-up"
        >
          <img src={frasImg} alt="cart" className='project-img' />
          <div className="layer">
            <h3>Face Recognition Based Attendance System</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur quia suscipit!</p>
            <div>
              <a href="https://github.com/dipendrasingh100/FRAS" target='_blank' rel="noreferrer">
                <button className='Btn'>
                  <div className='sign'>
                    <FontAwesomeIcon icon={faCode} size="lg" style={{ color: "#ffffff", }} />
                  </div>
                  <div className="text">Code</div>
                </button>
              </a>
              <a href="" >
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
