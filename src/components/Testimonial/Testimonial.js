import React from 'react';
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ImgTestimonial from '../../assets/bgImgTestimonial.png';
import DoctorOne from "../../assets/doctor1.jpg";
import DoctorTwo from "../../assets/doctor2.jpeg";
import DoctorThree from "../../assets/doctor3.jpeg";
import DoctorFour from "../../assets/doctor4.jpeg";
import DoctorFive from '../../assets/doctor5.jpeg';
import DoctorSix from "../../assets/doctor6.jpeg";
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="swiper-button-next test-btn-next"
            onClick={onClick}
            style={{
                position: "absolute",
                top: "100px",
                right: "auto",
                left: "40px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 1,
                color: "#fff",
                fontSize: "24px",
                backgroundColor: "#007bff",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="swiper-button-prev test-btn-prev"
            onClick={onClick}
            style={{
                position: "absolute",
                top: "100px",
                left: "-25px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 1,
                color: "#fff",
                fontSize: "24px",
                backgroundColor: "#007bff",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
    );
};

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
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
                                <img className="bg-img" src={ImgTestimonial} alt="discrption" />
                                <ul>
                                    <li data-member="1">
                                        <a href="/react/">
                                            <img src={DoctorOne} alt="discrption" />
                                        </a>
                                    </li>
                                    <li data-member="2">
                                        <a href="/react/">
                                            <img src={DoctorTwo} alt="discrption" />
                                        </a>
                                    </li>
                                    <li data-member="3">
                                        <a href="/react/">
                                            <img src={DoctorThree} alt="discrption" />
                                        </a>
                                    </li>
                                    <li data-member="4">
                                        <a href="/react/">
                                            <img src={DoctorFour} alt="discrption" />
                                        </a>
                                    </li>
                                    <li data-member="5">
                                        <a href="/react/">
                                            <img src={DoctorFive} alt="discrption" />
                                        </a>
                                    </li>
                                    <li data-member="6">
                                        <a href="/react/">
                                            <img src={DoctorSix} alt="discrption" />
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