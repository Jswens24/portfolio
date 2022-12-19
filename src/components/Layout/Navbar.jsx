import React from 'react';
import './Navbar.css'

const Navbar = () => {

    return (
        <div className='navbar-container'>
            <div className='name-and-dev-nav-bar'>
                <h1 className='nav-name'>JESSICA SWENSON</h1>
                <h3 className='nav-web-dev'>web developer</h3>
            </div>
            <div className='nav-link-container'>
                <p className='nav-link'>ABOUT</p>
                <p className='nav-link'>PROJECTS</p>
                <p className='nav-link'>CONTACT</p>
            </div>
        </div>
    )
};

export default Navbar;