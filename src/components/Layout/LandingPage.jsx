import React from 'react';
import './LandingPage.css'

const LandingPage = () => {

    return (
        <div className='main-pg-background'>
            <div className='name-circle'>
                <h1 className='name-on-landing'>JESSICA SWENSON</h1>
                <h3 className='web-dev-landing'>web developer</h3>
            </div>
            <div className="scroll-arrow">
                <a href="#about-page"><div className="arrow"></div></a>
                <a href="#about-page"><div className="arrow"></div></a>
                <a href="#about-page"><button className='click-here-btn'>Click Here</button></a>
            </div>

        </div>
    )
};

export default LandingPage;