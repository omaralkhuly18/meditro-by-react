import React from 'react';
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import ImgTestimonial from '../../assets/bgImgTestimonial.png';
import DoctorOne from "../../assets/doctor1.jpg";
import DoctorTwo from "../../assets/doctor2.jpeg";
import DoctorThree from "../../assets/doctor3.jpeg";
import DoctorFour from "../../assets/doctor4.jpeg";
import DoctorFive from '../../assets/doctor5.jpeg';
import DoctorSix from "../../assets/doctor6.jpeg";

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <>
            <section className='section-area section-sp3 testimonial-wraper'>
                <div className='container'>
                    <div className="heading-bx text-center">
                        <h6 className="title-ext text-secondary">
                            Testimonial
                        </h6>
                        <h2 className="title m-b0">
                            See What Are The Patients
                            <br />
                            Saying About us
                        </h2>
                    </div>
                    <div className='row align-items-center'>
                        <div className="col-lg-6 text-center">
                            <div className="thumb-wraper">
                                <img className="bg-img" src={ImgTestimonial} alt="" />
                                <ul>
                                    <li data-member="1">
                                        <a href="/react/">
                                            <img src={DoctorOne} alt="" />
                                        </a>
                                    </li>
                                    <li data-member="2">
                                        <a href="/react/">
                                            <img src={DoctorTwo} alt="" />
                                        </a>
                                    </li>
                                    <li data-member="3">
                                        <a href="/react/">
                                            <img src={DoctorThree} alt="" />
                                        </a>
                                    </li>
                                    <li data-member="4">
                                        <a href="/react/">
                                            <img src={DoctorFour} alt="" />
                                        </a>
                                    </li>
                                    <li data-member="5">
                                        <a href="/react/">
                                            <img src={DoctorFive} alt="" />
                                        </a>
                                    </li>
                                    <li data-member="6">
                                        <a href="/react/">
                                            <img src={DoctorSix} alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <Slider {...settings}>
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;