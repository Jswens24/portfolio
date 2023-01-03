import React from 'react';
import Navbar from './Navbar';
import './AboutPage.css';

const AboutPage = () => {

    return (
        <div className='about-me-page-container'>

            <div id='about-page' className='about-me-info-container'>
                <div>
                    <h1 className='about-me-h1'>ABOUT ME</h1>
                    <p className='about-me-bio'>Hi, I’m Jessica!  I’m from Salt Lake City, and I’m a Web Developer.  I am also a serial learner, whether it's learning a new skill, hobby, or sport, I am always learning something new.  After working many years in finance and then getting a degree in Business Administration.  I decided to take a Coding Basics class and I immediately fell in love with programming.  I love the challenge and creativity that it offers.  I attended Devmountain's Web Developement program where I learned the foundations of the web as well as specialized in React. </p>
                </div>
                <div className='education-div'>
                    <img className='portfolio-pic' src='https://drive.google.com/uc?export=view&id=1Vqvp_DNooIELcVbju_wRweselPFDuOwT' alt='picture of me!' />
                    <div className='edu-text'>
                        <h3 className='education-h3'>EDUCATION</h3>
                        <h4 className='name-of-school'>Strayer University March 2022</h4>
                        <p className='type-of-degree'>Associates in Business Administration</p>
                        <br />
                        <h4 className='name-of-school'>Devmountain December 2022</h4>
                        <p className='type-of-degree'> Web Development Program</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutPage;