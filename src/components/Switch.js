import React, { useState } from 'react'
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import reactimg from "../assets/react1.svg"
import flask from "../assets/icons8-flask-50.svg"
import django from "../assets/django.svg"
import python from "../assets/python.svg"
import node from "../assets/node.png"
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'

const Switch = () => {
    const [selected, setSelect] = useState("skill")
    return (
        <>
            <div className="tab-titles  mb-20">
                <div className={`btn btn-light ${selected === "edu" && "active"}`} onClick={() => setSelect("edu")}>
                    Education
                </div>
                <div className={`btn btn-light ${selected === "skill" && "active"}`} onClick={() => setSelect("skill")}>
                    Skills
                </div>
                <div className={`btn btn-light ${selected === "exp" && "active"}`} onClick={() => setSelect("exp")}>
                    Experience
                </div>
            </div>
            <div className={`tab-contents ${selected === "edu" && "active-tab"}`}>
                <Education />
            </div>
            <div className={`tab-contents ${selected === "skill" && "active-tab"}`}>
                <div className="content-container">
                    <Skills logo={html} percent="70" name="HTML" />
                    <Skills logo={css} percent="60" name="CSS3" />
                    <Skills logo={js} percent="80" name="JavaScript" />
                    <Skills logo={reactimg} percent="75" name="React.JS" />
                    <Skills logo={python} percent="85" name="Python" />
                    <Skills logo={flask} percent="75" name="Flask" />
                    <Skills logo={django} percent="70" name="Django" />
                    <Skills logo={node} percent="50" name="Node.JS" />
                </div>
            </div>
            <div className={`tab-contents ${selected === "exp" && "active-tab"}`}>
                <Experience />
            </div>
        </>
    )
}

export default Switch
