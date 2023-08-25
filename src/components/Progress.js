import React from 'react'
import "../styles/progress.css"

const Progress = ({percent}) => {
    return (
        <div className="percent" style={{"--clr":"#4fb7dc", "--num": percent}}>
            <div className="dot"></div>
            <svg>
                <circle cx="40" cy="40" r="40"></circle>
                <circle cx="40" cy="40" r="40"></circle>
            </svg>
            <div className="number">
                <h3>
                    {percent} <span>%</span>
                </h3>
            </div>
        </div>
    )
}

export default Progress
