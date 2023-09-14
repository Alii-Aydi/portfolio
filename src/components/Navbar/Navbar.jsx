import React, { useState } from 'react'
import './navbar.styles.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [toggle, setToggel] = useState(false)
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.AliLogos} alt='logo'></img>
            </div>
            <ul className='app__navbar-links'>
                {['Home', 'About', 'work', 'skills', 'contact'].map((link) => {
                    return (<li key={`link-${link}`} className='app__flex p-text'>
                        <div></div>
                        <a href={`#${link}`}>{link}</a>
                    </li>)
                })}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggel(true)}></HiMenuAlt4>

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggel(false)}></HiX>
                        <ul>
                            {['Home', 'About', 'work', 'skills', 'contact'].map((link) => {
                                return (<li key={link} className='p-text'>
                                    <a href={`#${link}`} onClick={() => setToggel(false)}>{link}</a>
                                </li>)
                            })}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar