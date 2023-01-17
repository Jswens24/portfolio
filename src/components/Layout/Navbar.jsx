import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [toggleNavCss, setToggleNavCss] = useState(false);

    const hamburgerHandler = () => {
        setToggleNavCss(!toggleNavCss);
        console.log(toggleNavCss);
    }

    return (
        <div className="flex-nav">
            <div className='navbar-container'>
                <div className={toggleNavCss ? 'name-and-dev-nav-bar:active' : 'name-and-dev-nav-bar'}>
                    <h1 className='nav-name'>JESSICA SWENSON</h1>
                    <h3 className='nav-web-dev'>web developer</h3>
                </div>
                <a onClick={hamburgerHandler} class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div className={toggleNavCss ? 'nav-link-container:active' : 'nav-link-container'}>
                    <a href="#about-page" onClick={hamburgerHandler}><p className='nav-link'>ABOUT</p></a>
                    <a href="#project-page" onClick={hamburgerHandler}><p className='nav-link'>PROJECTS</p></a>
                    <a href='#contact-page' onClick={hamburgerHandler}><p className='nav-link'>CONTACT</p></a>
                </div>
            </div>
            <div className="right-side"></div>
        </div>
    )
};

export default Navbar;