import React, { useRef, useState } from 'react'
import "../styles/contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import loader from "../assets/loader.gif"

const Contact = () => {
    const [success, setSuccess] = useState(false)
    const [btn, setbtn] = useState(false)
    const formC = useRef()
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwfJsfopxsGCiE7mn6gOkVhAUkxVIwCf6cJHiMyhdrNHH5S7pHpmfK04LKaPn6KNQh9/exec'

    const handleSubmit = e => {
        e.preventDefault()
        setbtn(true)
        fetch(scriptURL, { method: 'POST', body: new FormData(formC.current) })
            .then(response => {
                setSuccess(true);
                formC.current.reset()
                setbtn(false)
            })
            .catch(error => console.error('Error!', error.message))


    }

    return (
        <div className='contact-main' id='contact'>
            <h2>CONTACT</h2>
            <div className='contact-cont'>
                <div className='source-container'>
                    <h2>Drop Me a Message</h2>
                    <p>Whether you're a startup, business owner, or fellow enthusiast, I'm open to networking and collaboration. Drop a message and let's connect!</p>
                    <div className='contact-details'>
                        <div className="contact-container">
                            <a href="tel:9799622682">
                                <FontAwesomeIcon icon={faPhone} size="xl" style={{ color: "#ffffff", }} />
                            </a>
                            <p>+919799622682</p>
                        </div>
                        <div className="contact-container">
                            <a href="email:dipendrasingh9950@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: "#ffffff", }} />
                            </a>
                            <p>dipendrasingh9950@gmail.com</p>
                        </div>
                    </div>
                </div>
                <form className='form-container' onSubmit={handleSubmit} ref={formC}>
                    <div className="inp-container">
                        <input type="text" name="Name" placeholder='Name' autoComplete="off" required />
                    </div>
                    <div className="inp-container">
                        <input type="email" name="Email" placeholder='Email' autoComplete="off" required />
                    </div>
                    <div className="inp-container">
                        <textarea name="Message" rows="5" style={{ resize: "none" }} placeholder='Message' required></textarea>
                    </div>
                    <button type="submit" className='btn' disabled={btn}>
                        {btn ? <img src={loader} alt="loader" /> :
                            "Send"}</button>
                </form>
            </div>
            <div className={`successCont ${success && "disp"}`}>
                <div className="successCard">
                    <p className="successHeading">Thank You.</p>
                    <p className="successDescription">Your message has been sent successfully!</p>
                    <button className="acceptButton" onClick={() => setSuccess(false)}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
