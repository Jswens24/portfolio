import React from 'react';
import './ContactPage.css'

const ContactPage = () => {
    return (
        <div id='contact-page' className='contact-container'>
            <div className="upper-contact-contain">
                <h1 className='contact-h1'>CONTACT</h1>
                <div className="social-btn-container">
                    <button className='social-btn'>GITHUB</button>
                    <button className='social-btn'>LINKEDIN</button>
                    <button className='social-btn'>EMAIL</button>
                </div>
            </div>
            <div className="lower-contact-contain">
                <div className="input-container">
                    <label>NAME: <input type='text' /> </label>
                    <label>EMAIL: <input type='text' /> </label>
                    <div className="textarea-flex">
                        <label>MESSAGE: <textarea></textarea> </label>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ContactPage;