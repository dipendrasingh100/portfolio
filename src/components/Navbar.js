import React, { useState } from 'react'
import "../styles/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    //to handle hamburger click
    const [burgerClick, setBurgerClick] = useState(false)
    const handleBurgerClick = () => {
        setBurgerClick(!burgerClick)
    }
    //for the header background change
    const [headerBG, setHeaderBG] = useState(false)
    const changeBG = () => {
        let yscroll = window.scrollY
        if (yscroll >= 100) {
            setHeaderBG(true)
        } else {
            setHeaderBG(false)
        }

        switch (true) {
            case (yscroll === 0): setSelectedNav(1); break
            case (yscroll >= 489 && yscroll < 1260): setSelectedNav(2); break
            case (yscroll >= 1260 && yscroll < 1814): setSelectedNav(3); break
            case (yscroll >= 1814): setSelectedNav(4); break
            default: setSelectedNav(1); break
        }
    }

    window.addEventListener('scroll', changeBG)

    const [selectedNav, setSelectedNav] = useState(1)

    return (
        <nav className={`${headerBG ? "header header-bg" : "header"}`}>
            <a href="#home">
                <h1>Portfolio</h1>
            </a>
            <ul className={`nav-menu ${burgerClick && 'active'}`} >
                <li><a href="#home" className={`${selectedNav === 1 && "active-s"}`}>Home</a></li>
                <li><a href="#about" className={`${selectedNav === 2 && "active-s"}`}>About</a></li>
                <li><a href="#projects" className={`${selectedNav === 3 && "active-s"}`}>Projects</a></li>
                <li><a href="#contact" className={`${selectedNav === 4 && "active-s"}`}>Contact</a></li>
            </ul>
            <div className="hamburger" onClick={handleBurgerClick}>
                {burgerClick
                    ? <FontAwesomeIcon icon={faXmark} size="xl" style={{ color: "#ffffff", }} />
                    : <FontAwesomeIcon icon={faBars} size="lg" style={{ color: "#ffffff", }} />
                }
            </div>
        </nav>
    )
}

export default Navbar
