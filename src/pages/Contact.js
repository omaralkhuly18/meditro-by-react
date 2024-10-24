import React from 'react';
import './Contact.css';
import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactForm/ContactForm';

import SharpOne from '../assets/sharpe5.png';
import SharpTwo from '../assets/sharpe6.png';
import SharpThree from '../assets/sharpe7.png';
import GoToTopButton from '../components/buttonGoToTop/ButtonGoToTop';
const Contact = () => {
    return (
        <>
            <Banner />
            <section id="contact-full">
                <h3>Get in Touch</h3>
                <ContactForm />
            </section>

            <section class="section-area section-sp1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="feature-container feature-bx4 feature4">
                                <div class="icon-md feature-icon">
                                    <img src={SharpOne} alt="" />
                                </div>
                                <div class="icon-content">
                                    <h5 class="ttr-title">
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
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="feature-container feature-bx4 feature3">
                                <div class="icon-md feature-icon">
                                    <img src={SharpTwo} alt="" />
                                </div><div class="icon-content">
                                    <h5 class="ttr-title">
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
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="feature-container feature-bx4 feature2">
                                <div class="icon-md feature-icon">
                                    <img src={SharpThree} alt="" />
                                </div>
                                <div class="icon-content">
                                    <h5 class="ttr-title">
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
            <GoToTopButton/>
        </>
    );
}

export default Contact;
