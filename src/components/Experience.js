import React from 'react'
import "../styles/experience.css"

const Experience = () => {
    return (
        <>
            <div className="exp-cont" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0">
                <div className="comp-name"><h3>Simpplr Software India Pvt. Ltd.</h3></div>
                <div className="duration">6 July 2022 - 6 Jan 2023</div>
                <div className="role"><h3>Software Engineer Intern</h3></div>
                <div className="location">Remote</div>
                <div className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, voluptate cum pariatur earum consequatur quia. Soluta qui odio nisi eos minus ipsum minima cumque facilis. Amet earum quia eaque error.</div>
                <div className="tech-stack">
                    <ul>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>JavaScript</li>
                        <li>REST API</li>
                        <li>NLP</li>
                        <li>Git</li>
                        <li>Docker</li>
                    </ul>
                </div>
                <div className='hor-line'></div>
            </div>
        </>
    )
}

export default Experience
