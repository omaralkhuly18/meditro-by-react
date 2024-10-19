import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.jpg';
import './footer.css';

const ContainerFooter = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-6'>

                        <div className="widget widget_info">
                            <div className="footer_logo">
                                <a href="#"><img src={Logo} /></a>
                            </div>
                            <div className="ft_contact">
                                <p className='p_foo'>
                                    Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                                    dolore smod tempor incididunt ut labore et.
                                </p>
                                <div className="contact_bx">
                                    <div className="icone_footer">
                                        <FontAwesomeIcon icon={faPhone} className="icon_footer" />
                                    </div>
                                    <div className="contact-number">
                                        <span>Contact Us</span>
                                        <h4 className="number">+01 123 456 7890</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6'>
                        <div className="widget footer_widget ml-50">
                            <h3 className="footer_title">Quick Links</h3>
                            <ul>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>About Us</span></a>
                                </li>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>Services</span></a>
                                </li>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>Booking</span></a>
                                </li>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>Faq's</span></a>
                                </li>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>Blogs</span></a>
                                </li>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>Out Team</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6'>
                        <div className="widget footer_widget">
                            <h3 className="footer_title">Our Service</h3>
                            <ul>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>Dental Care</span></a>
                                </li>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>Cardiac Clinic</span></a>
                                </li>
                                <li><a className='a_footer_dis' href="#"><span>Massege Therapy</span></a>
                                </li>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>Cardiology</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>Precise Diagnosis</span></a>
                                </li>
                                <li>
                                    <a className='a_footer_dis' href="#"><span>Abmbulance Services</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6'>
                        <div className="widget widget_form">
                            <h3 className="footer_title">Subcribe</h3>
                            <form className="subscribe-form subscription_form">
                                <div className="ajax-message"></div>
                                <div className="input-group">
                                    <input name="email" required=""
                                        className="form-control form_control" placeholder="Email Address" type="email" />
                                </div>
                                <button name="submit" value="Submit"
                                    type="submit" className="btn  btn_new1 shadow w-100">
                                    Subscribe Now
                                </button>
                            </form>
                            <div className="footer-social-link">
                                <ul>
                                    <li>
                                    <a href="https://www.facebook.com" target="_blank" className='spicial_bg_face' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} className="icon_downFoot facebook" />
                            </a>
                                    </li>
                                    <li>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="icon_downFoot twitter" />
                            </a>
                                    </li>
                                    <li>
                                    <a href="https://www.instagram.com" target="_blank" className='spicial_bg_inst' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="icon_downFoot instagram" />
                            </a>
                                    </li>
                                    <li>
                                    <a href="https://www.linkedin.com" target="_blank" className='spicial_bg_lined' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} className="icon_downFoot linkedin" />
                            </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default ContainerFooter;