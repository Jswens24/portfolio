import React from 'react';
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="flex-nav">
            <div className='navbar-container'>
                <div className='name-and-dev-nav-bar'>
                    <h1 className='nav-name'>JESSICA SWENSON</h1>
                    <h3 className='nav-web-dev'>web developer</h3>
                </div>
                <div className='nav-link-container'>
                    <a href="#about-page"><p className='nav-link'>ABOUT</p></a>
                    <a href="#project-page"><p className='nav-link'>PROJECTS</p></a>
                    <a><p className='nav-link'>CONTACT</p></a>
                </div>
            </div>
            <div className="right-side"></div>
        </div>
    )
};

export default Navbar;