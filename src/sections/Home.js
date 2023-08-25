import React, { useEffect, useState } from 'react'
import Image from '../components/Image'
import Contact from './Contact'
import About from './About'
import Project from './Project'
import Switch from '../components/Switch'
import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => {
    useEffect(()=>{
        Aos.init({
            duration:1300
        })
    },[])
    return (
        <div>
            <Image />
            <About />
            <Switch />
            <Project />
            <Contact />
        </div>
    )
}

export default Home
