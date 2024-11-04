import React from 'react';
import Banner from '../components/Banner/Banner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="team-member mb-30">
                                <div class="team-media">
                                    <img src={DoctorOne} alt="" />
                                </div>
                                <div class="team-info">
                                    <div class="team-info-comntent">
                                        <h4 class="title">
                                            Dr. Addition Smith
                                        </h4>
                                        <span class="text-secondary">
                                            Dentist
                                        </span>
                                    </div>
                                    <ul class="social-media mt-3">
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
                        <div class="col-lg-4 col-sm-6">
                            <div class="team-member mb-30">
                                <div class="team-media">
                                    <img src={DoctorTwo} alt="" />
                                </div>
                                <div class="team-info">
                                    <div class="team-info-comntent">
                                        <h4 class="title">
                                            Dr. Mahfuz Riad
                                        </h4>
                                        <span class="text-secondary">
                                            Chiropractor
                                        </span>
                                    </div>
                                    <ul class="social-media mt-3">
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
                        <div class="col-lg-4 col-sm-6">
                            <div class="team-member mb-30">
                                <div class="team-media">
                                    <img src={DoctorThree} alt="" />
                                </div>
                                <div class="team-info">
                                    <div class="team-info-comntent">
                                        <h4 class="title">
                                            Dr. David Benjamin
                                        </h4>
                                        <span class="text-secondary">
                                            Cardiologist
                                        </span>
                                    </div>
                                    <ul class="social-media mt-3">
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
                        <div class="col-lg-4 col-sm-6">
                            <div class="team-member mb-30">
                                <div class="team-media">
                                    <img src={DoctorFour} alt="" />
                                </div>
                                <div class="team-info">
                                    <div class="team-info-comntent">
                                        <h4 class="title">
                                            Dr. Addition Smith
                                        </h4>
                                        <span class="text-secondary">
                                            Dentist
                                        </span>
                                    </div>
                                    <ul class="social-media mt-3">
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
                        <div class="col-lg-4 col-sm-6">
                            <div class="team-member mb-30">
                                <div class="team-media">
                                    <img src={DoctorFive} alt="" />
                                </div>
                                <div class="team-info">
                                    <div class="team-info-comntent">
                                        <h4 class="title">
                                            Dr. Mahfuz Riad
                                        </h4>
                                        <span class="text-secondary">
                                            Chiropractor
                                        </span>
                                    </div>
                                    <ul class="social-media mt-3">
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
                        <div class="col-lg-4 col-sm-6">
                            <div class="team-member mb-30">
                                <div class="team-media">
                                    <img src={DoctorSix} alt="" />
                                </div>
                                <div class="team-info">
                                    <div class="team-info-comntent">
                                        <h4 class="title">
                                            Dr. David Benjamin
                                        </h4>
                                        <span class="text-secondary">
                                            Cardiologist
                                        </span>
                                    </div>
                                    <ul class="social-media mt-3">
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

export default Team;