import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.jpg';
import './footer.css';

const ContainerFooter = () => {
        const navigate = useNavigate();

    // دالة التنقل إلى تفاصيل المدونة
    const handleBlogClick = (blogType) => {
        navigate(`/BlogsDetails/${blogType}`);
    };
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-6'>

                        <div className="widget widget_info">
                            <div className="footer_logo">
                                <Link to="/Home"><img src={Logo} alt='LOGO'/></Link>
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
                                    <Link className='a_footer_dis' to="/about"><span>About Us</span></Link>
                                </li>
                                <li>
                                    <Link className='a_footer_dis' to="/Services"><span>Services</span></Link>
                                </li>
                                <li>
                                    <Link className='a_footer_dis' to="/Reservation"><span>Booking</span></Link>
                                </li>
                                <li>
                                    <Link className='a_footer_dis' to="/FAQ"><span>Faq's</span></Link>
                                </li>
                                <li>
                                    <Link className='a_footer_dis' to="/Blog"><span>Blogs</span></Link>
                                </li>
                                <li>
                                    <Link className='a_footer_dis' to="/Team"><span>Out Team</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6'>
                        <div className="widget footer_widget">
                            <h3 className="footer_title">Our Service</h3>
                            <ul>
                                <li>
                                    <button className='a_footer_dis' 
                                    onClick={() => handleBlogClick('Dental Care')}>
                                        <span>Dental Care</span></button>
                                </li>
                                <li>
                                    <button className='a_footer_dis' 
                                    onClick={() => handleBlogClick('Special Surgeon')}>
                                        <span>Special Surgeon</span></button>
                                </li>
                                <li><button className='a_footer_dis' 
                                onClick={() => handleBlogClick('Skin Surgeon')}>
                                    <span>Skin Surgeon</span></button>
                                </li>
                                <li>
                                    <button className='a_footer_dis' 
                                    onClick={() => handleBlogClick('Understand Health')}>
                                        <span>Understand Health</span></button>
                                </li>
                                <li>
                                    <button className='a_footer_dis' 
                                    onClick={() => handleBlogClick('Dentist Regularly')}>
                                        <span>Dentist Regularly</span></button>
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