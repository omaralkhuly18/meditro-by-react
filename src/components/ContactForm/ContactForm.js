import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    
    const [errors, setErrors] = useState({
        name: "", email: "", phone: "", message: ""
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const validateForm = () => {
        const nameRegex = /^[a-zA-Z\s]{3,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(\+?\d{1,4}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
        
        let nameError = "";
        let emailError = "";
        let phoneError = "";
        let messageError = "";

        if (!nameRegex.test(formData.name)) {
            nameError = "Please enter a valid name (only letters, 3 or more characters).";
        }

        if (!emailRegex.test(formData.email)) {
            emailError = "Please enter a valid email address.";
        }

        if (!phoneRegex.test(formData.phone)) {
            phoneError = "Please enter a valid phone number.";
        }

        if (formData.message.trim() === "") {
            messageError = "Message cannot be empty.";
        }

        setErrors({ name: nameError, email: emailError, phone: phoneError, message: messageError });
        return !nameError && !emailError && !phoneError && !messageError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                navigate('/home');
            }, 5000);
        }
    };

    return (
        <div>
            {showSuccess && <div className="success-message">Message sent successfully!</div>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    className="input_contact"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}

                <label htmlFor="email">Email:</label>
                <input
                    className="input_contact"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}

                <label htmlFor="phone">Phone Number:</label>
                <input
                    className="input_contact"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}

                <label htmlFor="message">Message:</label>
                <textarea
                    className="input_contact"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                ></textarea>
                {errors.message && <small className="text-danger">{errors.message}</small>}

                <button className='submit_button' type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;