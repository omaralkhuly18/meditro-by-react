import React from 'react';
import './ContactForm.css'
const ContactForm = () => {
    return (
        <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input className="input_contact" type="text" 
            id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input className="input_contact" type="email" 
            id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea className="input_contact" 
            id="message" name="message" required>
            </textarea>

            <button className='submit_button' type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
