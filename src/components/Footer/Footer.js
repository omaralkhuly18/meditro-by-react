import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/logo.jpg';
import './footer.css';

const ContainerFooter = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-6'>
                        <img src={Logo} />
                        <p>Hello Pro</p>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6'>
                        <p>Hello Pro</p>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6'>
                        <p>Hello Pro</p>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6'>
                        <p>Hello Pro</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} className="icon facebook" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} className="icon linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default ContainerFooter;