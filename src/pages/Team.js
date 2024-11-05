import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import DoctorOne from "../assets/doctor1.jpg";
import DoctorTwo from "../assets/doctor2.jpeg";
import DoctorThree from "../assets/doctor3.jpeg";
import DoctorFour from "../assets/doctor4.jpeg";
import DoctorFive from '../assets/doctor5.jpeg';
import DoctorSix from "../assets/doctor6.jpeg";

const Team = () => {
    return (
        <>
            <Banner />
            <section className='section-area team-wraper'>
                <div className="container">
                    <div className="row">
                        {/* Doctor One */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-member mb-30">
                                <div className="team-media">
                                    <img src={DoctorOne} alt="" />
                                </div>
                                <div className="team-info">
                                    <div className="team-info-comntent">
                                        <h4 className="title">
                                            <Link to={`/BlogDetailsSpicial/${encodeURIComponent("Dr. Addition Smith")}`}>
                                                Dr. Addition Smith
                                            </Link>
                                        </h4>
                                        <span className="text-secondary">Dentist</span>
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

                        {/* Doctor Two */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-member mb-30">
                                <div className="team-media">
                                    <img src={DoctorTwo} alt="" />
                                </div>
                                <div className="team-info">
                                    <div className="team-info-comntent">
                                        <h4 className="title">
                                            <Link to={`/BlogDetailsSpicial/${encodeURIComponent("Dr. Mahfuz Riad")}`}>
                                                Dr. Mahfuz Riad
                                            </Link>
                                        </h4>
                                        <span className="text-secondary">Chiropractor</span>
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

                        {/* Doctor Three */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-member mb-30">
                                <div className="team-media">
                                    <img src={DoctorThree} alt="" />
                                </div>
                                <div className="team-info">
                                    <div className="team-info-comntent">
                                        <h4 className="title">
                                            <Link to={`/BlogDetailsSpicial/${encodeURIComponent("Dr. David Benjamin")}`}>
                                                Dr. David Benjamin
                                            </Link>
                                        </h4>
                                        <span className="text-secondary">Cardiologist</span>
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

                        {/* Repeat for remaining doctors */}
                        {/* Doctor Four */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-member mb-30">
                                <div className="team-media">
                                    <img src={DoctorFour} alt="" />
                                </div>
                                <div className="team-info">
                                    <div className="team-info-comntent">
                                        <h4 className="title">
                                            <Link to={`/BlogDetailsSpicial/${encodeURIComponent("Dr. Addition Smith")}`}>
                                                Dr. Addition Smith
                                            </Link>
                                        </h4>
                                        <span className="text-secondary">Dentist</span>
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

                        {/* Doctor Five */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-member mb-30">
                                <div className="team-media">
                                    <img src={DoctorFive} alt="" />
                                </div>
                                <div className="team-info">
                                    <div className="team-info-comntent">
                                        <h4 className="title">
                                            <Link to={`/BlogDetailsSpicial/${encodeURIComponent("Dr. Mahfuz Riad")}`}>
                                                Dr. Mahfuz Riad
                                            </Link>
                                        </h4>
                                        <span className="text-secondary">Chiropractor</span>
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

                        {/* Doctor Six */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-member mb-30">
                                <div className="team-media">
                                    <img src={DoctorSix} alt="" />
                                </div>
                                <div className="team-info">
                                    <div className="team-info-comntent">
                                        <h4 className="title">
                                            <Link to={`/BlogDetailsSpicial/${encodeURIComponent("Dr. David Benjamin")}`}>
                                                Dr. David Benjamin
                                            </Link>
                                        </h4>
                                        <span className="text-secondary">Cardiologist</span>
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
};

export default Team;
