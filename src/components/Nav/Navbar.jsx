import React from "react";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.jpg';

const ContainerNav = () => {
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
                        <Nav.Link href="#home" className="active">Home</Nav.Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#About">
                                <span className="nav_links">
                                    About Us
                                </span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Team">
                                <span className="nav_links">
                                    Our Team
                                </span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#FAQ">
                                <span className="nav_links">
                                    FAQ's
                                </span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Booking">
                                <span className="nav_links">
                                    Booking
                                </span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Error">
                                <span className="nav_links">
                                    Error 404
                                </span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#sign">
                                <span className="nav_links">
                                    Login / Register
                                </span>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Services">
                                <span className="nav_links">
                                    Services
                                </span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#ServicesDetails">
                                <span className="nav_links">
                                    Services Details
                                </span>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Blog">
                                <span className="nav_links">
                                    Blog
                                </span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#BlogDetails">
                                <span className="nav_links">
                                    Blog Details
                                </span>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Nav.Link href="#search">Search</Nav.Link>
                        <Nav.Link href="#phone">Icon + (+01) 999 888 777</Nav.Link>
                        <Nav.Link href="#contact_button">
                            <button>
                                <span className="span_text">Contact Us</span>
                                <FontAwesomeIcon className="span_icon" icon={faChevronRight} />
                            </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ContainerNav;
