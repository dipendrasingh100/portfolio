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
            case (yscroll >= 4 && yscroll < 1472): setSelectedNav(2); break
            case (yscroll >= 1472 && yscroll < 2000): setSelectedNav(3); break
            case (yscroll >= 2000): setSelectedNav(4); break
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
                <li><a href="#home" className={`${selectedNav === 1 && "active-s"}`} onClick={()=>setBurgerClick(false)}>Home</a></li>
                <li><a href="#about" className={`${selectedNav === 2 && "active-s"}`} onClick={()=>setBurgerClick(false)}>About</a></li>
                <li><a href="#projects" className={`${selectedNav === 3 && "active-s"}`} onClick={()=>setBurgerClick(false)}>Projects</a></li>
                <li><a href="#contact" className={`${selectedNav === 4 && "active-s"}`} onClick={()=>setBurgerClick(false)}>Contact</a></li>
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
