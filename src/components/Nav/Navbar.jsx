import React from "react";
import { Navbar, Container, NavDropdown, Nav, Collapse } from 'react-bootstrap';
import './Nav.css';
import Logo from '../../assets/logo.jpg'
const ContainerNav = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={Logo} title="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="active">Home</Nav.Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#About">
                                About Us
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Team">
                                Our Team
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#FAQ's">
                                FAQ's
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Booking">
                                Booking
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Error">
                                Error 404
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#sign">
                                Login / Register
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Services">
                                Services
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Services Details">
                                Services Details
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Blog">
                                Blog
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Blog Details">
                                Blog Details
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">
                            Contact Us
                        </Nav.Link>
                        <Nav.Link href="#serch">
                            serch
                        </Nav.Link>
                        <Nav.Link href="#phone">
                            icon + (+01) 999 888 777
                        </Nav.Link>
                        <Nav.Link href="#contact_button">
                            <button>
                                Contact Us
                            </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ContainerNav;