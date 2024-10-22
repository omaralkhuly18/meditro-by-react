import React, { useState } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Logo from '../../assets/logo.jpg';
import './Nav.css';

const ContainerNav = () => {
    // حالات لإظهار كل قائمة Dropdown بشكل منفصل
    const [showPages, setShowPages] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showBlog, setShowBlog] = useState(false);

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/home" className="active">Home</Link>

                        {/* قائمة Pages */}
                        <NavDropdown
                            title="Pages"
                            id="basic-nav-dropdown"
                            show={showPages}
                            onMouseEnter={() => setShowPages(true)}
                            onMouseLeave={() => setShowPages(false)}
                        >
                            <NavDropdown.Item className='nav_links' 
                            to="/About" as={Link}>
                                <span className='span_down_links'>
                                    About Us
                                </span>
                                </NavDropdown.Item>
                            <NavDropdown.Item className='nav_links' href="#Team">
                                <span className='span_down_links'>
                                    Our Team
                                </span>
                                </NavDropdown.Item>
                            <NavDropdown.Item className='nav_links' href="#FAQ">
                                <span className='span_down_links'>
                                    FAQ's
                                </span>
                                </NavDropdown.Item>
                            <NavDropdown.Item className='nav_links' href="#Booking">
                                <span className='span_down_links'>
                                    Booking
                                </span>
                                </NavDropdown.Item>
                            <NavDropdown.Item className='nav_links' href="#Error">
                                <span className='span_down_links'>
                                    Error 404
                                </span>
                                </NavDropdown.Item>
                            <NavDropdown.Item className='nav_links' href="#sign">
                                <span className='span_down_links'>
                                    Login / Register
                                </span>
                                </NavDropdown.Item>
                        </NavDropdown>

                        {/* قائمة Services */}
                        <NavDropdown
                            title="Services"
                            id="basic-nav-dropdown"
                            show={showServices}
                            onMouseEnter={() => setShowServices(true)}
                            onMouseLeave={() => setShowServices(false)}
                        >
                            <NavDropdown.Item className='nav_links' href="#Services">
                                <span className='span_down_links'>
                                    Services
                                </span>
                                </NavDropdown.Item>
                            <NavDropdown.Item className='nav_links' href="#ServicesDetails">
                                <span className='span_down_links'>
                                    Services Details
                                </span>
                                </NavDropdown.Item>
                        </NavDropdown>

                        {/* قائمة Blog */}
                        <NavDropdown
                            title="Blog"
                            id="basic-nav-dropdown"
                            show={showBlog}
                            onMouseEnter={() => setShowBlog(true)}
                            onMouseLeave={() => setShowBlog(false)}
                        >
                            <NavDropdown.Item className='nav_links' href="#Blog">
                                <span className='span_down_links'>
                                    Blog
                                </span>
                                </NavDropdown.Item>
                            <NavDropdown.Item className='nav_links' href="#BlogDetails">
                                <span className='span_down_links'>
                                    Blog Details
                                </span>
                                </NavDropdown.Item>
                        </NavDropdown>

                        <Link to="/Contact">Contact Us</Link>
                        <Link to="/search">
                            <FontAwesomeIcon icon={faSearch} className="color_icon" />
                        </Link>
                        <Link to="/phone" className="display_none">
                            <FontAwesomeIcon icon={faPhone} className="color_icon me-3" />
                            (+01) 999 888 777
                        </Link>
                        <Link to="/contact_button">
                            <button>
                                <span className="span_text">Contact Us</span>
                                <FontAwesomeIcon className="span_icon" icon={faChevronRight} />
                            </button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ContainerNav;
