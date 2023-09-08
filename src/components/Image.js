import React, { useEffect, useRef } from 'react'
import "../styles/image.css"
import IntroImg from "../assets/bgimage.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import Typed from 'typed.js'


const Image = () => {
  const title = useRef(null)
  useEffect(() => {
    const typed = new Typed(title.current, {
      strings: ['Dipendra', 'Full-Stack Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <div className='bg-image' id='home'>
      <div className="mask">
        <img src={IntroImg} alt="InroImg" className='intro-img' />
      </div>
      <div className="content">
        <p className='hello' data-aos='fade-down'>HELLO.</p>
        <h1>I Am <span ref={title}></span></h1>
        <div className='social'>
          <a href="https://www.linkedin.com/in/dipendrahada/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className='icon' />
          </a>
          <a href="https://github.com/dipendrasingh100" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSquareGithub} size="lg" className='icon' />
          </a>
          <a href="https://twitter.com/Dipendr93990461" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSquareTwitter} size="lg" className='icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Image
