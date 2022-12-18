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
                <p className='scroll-landing'>Scroll</p>
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>
            </div>

        </div>
    )
};

export default LandingPage;