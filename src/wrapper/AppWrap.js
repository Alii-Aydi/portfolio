import React from 'react'
import { NavigationDots, SocialMedias } from '../components'

const AppWrap = (Component, idName, className) => function HOC() {
    return (
        <div id={idName} className={`app__container ${className}`}>
            <SocialMedias></SocialMedias>

            <div className='app__wrapper app__flex'>
                <Component></Component>

                <div className='copyright'>
                    <p className='p-text'>@2023 Ali Aydi</p>
                    <p className='p-text'>All rights reserved</p>
                </div>
            </div>

            <NavigationDots active={idName}></NavigationDots>
        </div>
    )
}

export default AppWrap