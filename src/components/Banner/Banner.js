import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import './Banner.css';

const Banner = ({ serviceType, blogType , doctorName}) => {
    const location = useLocation();

    // حدد اسم الصفحة بناءً على المسار الحالي
    const getPageName = () => {
        if (serviceType) {
            return `${serviceType}`; // إظهار serviceType إذا كان موجودًا
        }
        if (blogType) {
            return `${blogType}`; // إظهار serviceType إذا كان موجودًا
        }
        if (doctorName) {
            return `${doctorName}`; // إظهار serviceType إذا كان موجودًا
        }
        switch (location.pathname) {
            case '/About':
                return 'About Us';
            case '/Team':
                return 'Our Team';
            case '/FAQ':
                return "Page Not Found";
            case '/Reservation':
                return 'Booking';
            case '/Error':
                return 'Error 404';
            case '/Services':
                return 'Services';
            case '/Blog':
                return 'Blogs';
            case '/Contact':
                return 'Contact Us';
            case '/DetailsPage':
                return 'Booking Details';
            default:
                return '';
        }
    };

    return (
        <div className="container">
            <div className="page-banner-entry text-center page_banner_entry">
                <h1 className='banner_text'>{getPageName()}</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row breadcrumb_row">
                    <ul className="breadcrumb">
                        <li className="breadcrumb_item">
                            <a href="/Home">
                                <FontAwesomeIcon className="banner_icon" icon={faHome} />
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="breadcrumb_item active" aria-current="page">
                            <span>{getPageName()}</span> {/* إظهار اسم الصفحة */}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Banner;
