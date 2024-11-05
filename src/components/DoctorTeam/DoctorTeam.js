import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

import DoctorOne from "../../assets/doctor1.jpg";
import DoctorTwo from "../../assets/doctor2.jpeg";
import DoctorThree from "../../assets/doctor3.jpeg";
// import DoctorFour from "../../assets/doctor4.jpeg";
// import DoctorSix from "../../assets/doctor5.jpeg";
import './DoctorTeam.css';

const DoctorTeam = () => {
    return (
        <>
            <section className="section-area section-sp3 team-wraper">
                <div className="container">
                    <div className="heading-bx text-center">
                        <h6 className="title-ext">
                            Our Doctor
                        </h6>
                        <h2 className="title">
                            Meet Best Doctors
                        </h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="team-member">
                                <div className="team-media">
                                    <img src={DoctorOne} alt="Dr. Addition Smith" />
                                </div>
                                <div className="team-info">
                                    <div className="team-info-content">
                                        <h4 className="title textDo">
                                            <Link to={`/BlogDetailsSpicial/${encodeURIComponent("Dr. Addition Smith")}`}>
                                                Dr. Addition Smith
                                            </Link>
                                        </h4>
                                        <span className="spanDo spanDo">
                                            Dentist
                                        </span>
                                    </div>
                                    <ul className="social-media mt-3">
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://twitter.com/">
                                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                                                <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                                                <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="team-member">
                                <div className="team-media">
                                    <img src={DoctorTwo} alt="Dr. Mahfuz Riad" />
                                </div>
                                <div className="team-info">
                                    <div className="team-info-content">
                                        <h4 className="title textDo">
                                            <Link to={`/BlogDetailsSpicial/${encodeURIComponent("Dr. Mahfuz Riad")}`}>
                                                Dr. Mahfuz Riad
                                            </Link>
                                        </h4>
                                        <span className="spanDo spanDo">
                                            Chiropractor
                                        </span>
                                    </div>
                                    <ul className="social-media mt-3">
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://twitter.com/">
                                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                                                <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                                                <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="team-member">
                                <div className="team-media">
                                    <img src={DoctorThree} alt="Dr. David Benjamin" />
                                </div>
                                <div className="team-info">
                                    <div className="team-info-content">
                                        <h4 className="title textDo">
                                            <Link to={`/BlogDetailsSpicial/${encodeURIComponent("Dr. David Benjamin")}`}>
                                                Dr. David Benjamin
                                            </Link>
                                        </h4>
                                        <span className="spanDo">
                                            Cardiologist
                                        </span>
                                    </div>
                                    <ul className="social-media mt-3">
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://twitter.com/">
                                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                                                <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                                                <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DoctorTeam;
