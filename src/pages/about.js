import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutTopLeft from '../assets/about_us1.jpg';
import AboutTopRight from '../assets/about_us2.jpg';
import AboutBottomLeft from '../assets/about_us3.jpg';
import SharpeImgOne from "../assets/sharpe1.png";
import SharpeImgTwo from "../assets/sharpe2.png";
import SharpeImgThree from "../assets/sharpe3.png";
import SharpeImgFour from "../assets/sharpe4.png";
import './about.css';
const About = () => {
    return (
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-30">
                    <div class="about-thumb-area">
                        <ul>
                            <li>
                                <img class="about-thumb1" src={AboutTopLeft} alt="" />
                            </li>
                            <li>
                                <img class="about-thumb2" src={AboutTopRight} alt="" />
                            </li>
                            <li>
                                <img class="about-thumb3" src={AboutBottomLeft} alt="" />
                            </li>
                            <li>
                                <div class="exp-bx">
                                    20
                                    <span>
                                        Year Experience
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 mb-30">
                    <div class="heading-bx">
                        <h6 class="title-ext text_secondary">
                            About Us
                        </h6>
                        <h2 class="title_about1">
                            The Great Place Of Medical Hospital Center
                        </h2>
                        <p class="title_about2">
                            We provide the special tips and advice’s
                            of heath care treatment and high level of best
                            technology involve in the our hospital.
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-6 mb-30 style_mr">
                            <div class="feature-container feature-bx1 feature1">
                                <div class="icon-md">
                                    <span class="icon-cell">
                                        <img src={SharpeImgOne}/>
                                    </span>
                                </div>
                                <div class="icon-content">
                                    <h4 class="ttr-title">
                                        Emergency Help
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 mb-30 style_mr">
                            <div class="feature-container feature-bx1 feature2">
                                <div class="icon-md">
                                    <span class="icon-cell">
                                        <img src={SharpeImgTwo}/>
                                    </span>
                                </div>
                                <div class="icon-content">
                                    <h4 class="ttr-title">
                                        Qualified Doctors
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 mb-30 style_mr">
                            <div class="feature-container feature-bx1 feature3">
                                <div class="icon-md">
                                    <span class="icon-cell">
                                        <img src={SharpeImgThree}/>
                                    </span>
                                </div>
                                <div class="icon-content">
                                    <h4 class="ttr-title">
                                        Best Professionals
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 mb-30 style_mr">
                            <div class="feature-container feature-bx1 feature4">
                                <div class="icon-md">
                                    <span class="icon-cell">
                                        <img src={SharpeImgFour}/>
                                    </span>
                                </div>
                                <div class="icon-content">
                                    <h4 class="ttr-title">
                                        Medical Treatment
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="btn btn-primary shadow" href="#">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;