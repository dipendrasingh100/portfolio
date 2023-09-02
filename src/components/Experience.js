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
                <div className="description">Contributed significantly to the Data Science team by creating an end-to-end internal web app for storing various ML/DL projects. Leveraged the Flask web framework and harnessed MongoDB Atlas Database to seamlessly manage and preserve project and user particulars. Proficiently designed, validated, and optimized diverse endpoints using Postman, while seamlessly incorporating Streamlit for real-time on-site testing and execution of ML models. Employed Docker to encapsulate the web application, ensuring secure deployment, while gaining invaluable industry insights in the realm of NLP.</div>
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
            <div className="exp-cont" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0">
                <div className="comp-name"><h3>ineuron.ai</h3></div>
                <div className="duration">Jan 2022 - March 2023</div>
                <div className="role"><h3>Machine Learning Intern</h3></div>
                <div className="location">Remote</div>
                <div className="description">
                    Build a Machine learning model to predict the sales of each item at a
                    particular outlet. Store and fetch the data from Cassandra Astradb Database. performed data preprocessing, model training, model testing, and at the final deployed the model on Heroku.
                </div>
                <div className="tech-stack">
                    <ul>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Machine Learning</li>
                        <li>Heroku</li>
                        <li>Git</li>
                    </ul>
                </div>
                <div className='hor-line'></div>
            </div>
        </>
    )
}

export default Experience
