import React from 'react';
import './ContactPage.css'

const ContactPage = () => {
    const copyEmailHandler = () => {
        // navigator.clipboard.writeText('jessica.swenson.dev@gmail.com')
        window.prompt('Copy to clipboard:', 'jessica.swenson.dev@gmail.com')
        // alert('copied to clipboard')
    }

    return (
        <div className='contact-max-container'>
            <div id='contact-page' className='contact-container'>
                <div className="upper-contact-contain">
                    <h1 className='contact-h1'>CONTACT</h1>
                    <div className="social-btn-container">
                        <form>
                            <button formAction='https://github.com/Jswens24' className='social-btn'>GITHUB</button>
                        </form>
                        <form>
                            <button formAction='https://www.linkedin.com/in/jessica-swenson-9a8b85194/' className='social-btn'>LINKEDIN</button>
                        </form>
                        <button type='button' className='social-btn' onClick={copyEmailHandler}>EMAIL</button>
                    </div>
                </div>
                <div className="lower-contact-contain">
                    <form action="https://formsubmit.co/jessica.swenson.dev@gmail.com" method="POST" className="input-container">
                        <input type="hidden" name="_subject" value="New submission!" />
                        <input type="hidden" name="_next" value="http://localhost:3000/#contact-page"></input>
                        <label>NAME: <input type='text' name='name' required /> </label>
                        <label>EMAIL: <input type='text' name='email' required /> </label>
                        <div className="textarea-flex">
                            <label>MESSAGE: <textarea name='message' required></textarea> </label>
                        </div>
                        <button type='submit' className='social-btn submit-btn'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ContactPage;