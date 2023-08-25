import React, { useState } from 'react'
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import reactimg from "../assets/react1.svg"
import flask from "../assets/icons8-flask-50.svg"
import django from "../assets/django.svg"
import python from "../assets/python.svg"
import Progress from './Progress'

const Switch = () => {
    const [selected, setSelect] = useState("skill")
    return (
        <>
            <div className="tab-titles">
                <div className={`btn btn-light ${selected === "edu" && "active"}`} onClick={() => setSelect("edu")}>Education</div>
                <div className={`btn btn-light ${selected === "skill" && "active"}`} onClick={() => setSelect("skill")}>Skills</div>
                <div className={`btn btn-light ${selected === "exp" && "active"}`} onClick={() => setSelect("exp")}>Experience</div>
            </div>
            <div className={`tab-contents ${selected === "edu" && "active-tab"}`}>
                <div className="content-container">
                    <div className="sub-container">
                        <h2>Bachelor Degree in CSE</h2>
                        <h4>College of Technology and Engineering (2019 - 2023)</h4>
                    </div>
                </div>
            </div>
            <div className={`tab-contents ${selected === "skill" && "active-tab"}`}>
                <div className="content-container">
                    <div className="sub-container">
                        {/* <img src={html} alt="html" />
                        <h2>HTML</h2> */}
                        <Progress/>
                    </div>
                    <div className="sub-container">
                        <img src={css} alt="css" />
                        <h2>CSS3</h2>
                    </div>
                    <div className="sub-container">
                        <img src={js} alt="js" />
                        <h2>JavaScript</h2>
                    </div>
                    <div className="sub-container">
                        <img src={reactimg} alt="react" />
                        <h2>React.JS</h2>
                    </div>
                    <div className="sub-container">
                        <img src={python} alt="python" />
                        <h2>Python</h2>
                    </div>
                    <div className="sub-container">
                        <img src={flask} alt="flask" />
                        <h2>Flask</h2>
                    </div>
                    <div className="sub-container">
                        <img src={django} alt="django" />
                        <h2>Django</h2>
                    </div>
                </div>
            </div>
            <div className={`tab-contents ${selected === "exp" && "active-tab"}`}>
                <h2>Experience</h2>
            </div>
        </>
    )
}

export default Switch
