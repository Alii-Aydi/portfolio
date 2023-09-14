import React from 'react'

const navigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((link, index) => {
                return (
                    <a key={link + index}
                        className='app__navigation-dot'
                        href={`#${link}`}
                        style={active === link ? { backgroundColor: '#313BAC' } : {}}></a>
                )
            })}
        </div>
    )
}

export default navigationDots