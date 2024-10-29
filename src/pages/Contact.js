import React from 'react';
import './Contact.css';
import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactForm/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faIdBadge, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import SharpOne from '../assets/sharpe5.png';
import SharpTwo from '../assets/sharpe6.png';
import SharpThree from '../assets/sharpe7.png';
const Contact = () => {
    return (
        <>
            <Banner />
            <section id="contact-full">
                <h3>Get in Touch</h3>
                <div className='row'>
                    <div className='col-lg-6 mb-30'>
                        <ContactForm />
                    </div>
                    <div className="col-lg-6 mb-30">
                        <div className="contact-info contact_info ovpr-dark">
                            <div className="info-inner info_inner">
                                <h4 className="title mb-30">Contact Us For Any Informations</h4>
                                <div className="icon-box">
                                    <h6 className="title">
                                        <FontAwesomeIcon icon={faMap} />
                                        Location</h6>
                                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                </div>
                                <div className="icon-box">
                                    <h6 className="title">
                                        <FontAwesomeIcon icon={faIdBadge} />
                                        Email &amp; Phone</h6>
                                    <a href="javascript:void(0);" className="text-white">info@yourdomain.com</a>
                                    <p>(+68) 120034509</p>
                                </div>
                                <div className="icon-box">
                                    <h6 className="title">
                                        <FontAwesomeIcon icon={faGlobe} />
                                        Follow Us</h6>
                                    <ul className="social-media social_media">
                                        <li><a target="_blank"
                                            href="https://twitter.com/">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a></li>
                                        <li><a target="_blank"
                                            href="https://www.linkedin.com/">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a></li>
                                        <li><a target="_blank"
                                            href="https://www.instagram.com/">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-area section-sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="feature-container feature-bx4 feature4">
                                <div className="icon-md feature-icon">
                                    <img src={SharpOne} alt="" />
                                </div>
                                <div className="icon-content">
                                    <h5 className="ttr-title">
                                        Contact Number
                                    </h5>
                                    <p>
                                        +001 123 456
                                    </p>
                                    <p>
                                        +002 3424 44 00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="feature-container feature-bx4 feature3">
                                <div className="icon-md feature-icon">
                                    <img src={SharpTwo} alt="" />
                                </div><div className="icon-content">
                                    <h5 className="ttr-title">
                                        Email Address
                                    </h5>
                                    <p>
                                        info@yourdomain.com
                                    </p>
                                    <p>
                                        example@support.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="feature-container feature-bx4 feature2">
                                <div className="icon-md feature-icon">
                                    <img src={SharpThree} alt="" />
                                </div>
                                <div className="icon-content">
                                    <h5 className="ttr-title">
                                        Address
                                    </h5>
                                    <p>
                                        2005 Stokes Isle Apt. 896, Venaville 10010, USA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
