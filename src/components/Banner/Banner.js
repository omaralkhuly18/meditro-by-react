import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';
const Banner = () => {
    return (
        <div className="container">
            <div className="page-banner-entry text-center page_banner_entry">
                <h1>Contact Us</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row breadcrumb_row">
                    <ul className="breadcrumb">
                        <li className="breadcrumb_item">
                            <a href="/Home">
                                <FontAwesomeIcon className="banner_icon" icon={faHome} />
                                <span>
                                    Home
                                </span>
                            </a>
                        </li>
                        <li className="breadcrumb_item active" aria-current="page">
                            <span>
                                Contact Us
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    );
}

export default Banner;