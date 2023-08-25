import React from 'react'
import Progress from './Progress'

const Skills = ({logo, percent, name}) => {
    return (
        <div className="sub-container" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0">
            <img src={logo} alt="html" />
            <h3>{name}</h3>
            <Progress percent={percent} />
        </div>
    )
}

export default Skills
