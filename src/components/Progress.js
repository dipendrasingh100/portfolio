import React from 'react'
import "../styles/progress.css"

const Progress = () => {
    return (
        <div className="percent" style={{"--clr":"#04fc43", "--num": "85"}}>
            <div className="dot"></div>
            <svg>
                <circle cx="40" cy="40" r="40"></circle>
                <circle cx="40" cy="40" r="40"></circle>
            </svg>
            <div className="number">
                <h3>
                    85 <span>%</span>
                </h3>
            </div>
        </div>
    )
}

export default Progress
