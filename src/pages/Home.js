import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// استيراد مكونات Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// استيراد أنماط Swiper
import "swiper/css";
import "swiper/css/pagination";
// استيراد وحدة Pagination

import { Pagination } from "swiper/modules";
import Booking from '../components/Booking/Booking';
import AboutUs from '../components/AboutUs/AboutUs';
import ContactForm from '../components/ContactForm/ContactForm';
import GoToTopButton from '../components/buttonGoToTop/ButtonGoToTop';

import ImgOne from '../assets/bg_img.png';

import ImgInmaOne from '../assets/img_inemation1.png';
import ImgInmaTwo from '../assets/img_inemation2.png';
import ImgInmaThree from '../assets/img_inemation4.png';
import ImgInmaFour from '../assets/img_inemation9.png';
import ImgInmaFive from '../assets/img_inemation12.png';

import Appointment1 from '../assets/appointment1.png';
import Appointment2 from '../assets/appointment2.png';
import Appointment3 from '../assets/appointment3.png';
import Appointment4 from '../assets/appointment4.png';
import Appointment5 from '../assets/appointment5.png';
import Appointment6 from '../assets/appointment6.png';
const Home = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-6 col-sm-7 height_col'>
                            <h5>We Provide All Health Care Solution</h5>
                            <h2>Protect Your Health And Take Care To Of Your Health</h2>
                            <button><a href='#'>Read More</a></button>
                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-5'>
                            <div className='img_bg_one'>
                                <img src={ImgOne} alt='bg-img' className='imgOne' />
                            </div>
                        </div>
                    </div>
                </div>
                <img className='img_inm1 subscriber' src={ImgInmaOne} />
                <img className='img_inm2 subscriber' src={ImgInmaTwo} />
                <img className='img_inm3 subscriber' src={ImgInmaThree} />
                <img className='img_inm4 subscriber' src={ImgInmaFour} />
                <img className='img_inm5 subscriber' src={ImgInmaFive} />
            </header>
            <AboutUs />
            <section id="contact-section">
                <h3>Contact Us</h3>
                <ContactForm />
            </section>
            <section className="section-area section_area section-sp5 work-area">
                <div className="container-sm">
                    <div className="heading-bx text-center">
                        <h6 className="title_ext1 ">Working Process</h6>
                        <h2 className="title_ext2">How we works?</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-num-bx">01</div>
                                <div className="work-content">
                                    <h5 className="title text-secondary mb-10">Make Appointmnet</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                </div>
                                <a href="" className="btn btn-primary btn_primary lights light">
                                    <span> View More </span>
                                    <FontAwesomeIcon icon={faArrowRight} className='btn-icon-bx' />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="work-bx active">
                                <div className="work-num-bx">02</div>
                                <div className="work-content">
                                    <h5 className="title text-secondary mb-10">Take Treatment</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                </div>
                                <a href="" className="btn btn-primary btn_primary lights light">
                                    <span> View More </span>
                                    <FontAwesomeIcon icon={faArrowRight} className='btn-icon-bx' />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-num-bx">03</div>
                                <div className="work-content">
                                    <h5 className="title text-secondary mb-10">Registration</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                </div>
                                <a href="" className="btn btn-primary btn_primary lights light">
                                    <span> View More </span>
                                    <FontAwesomeIcon icon={faArrowRight} className='btn-icon-bx' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        {/* قائمة العناصر الثابتة */}
                        <div className="col-lg-5 col-md-4 col-sm-12">
                            <h6>Html</h6>
                            <h6>Css</h6>
                            <h6>JavaScript</h6>
                            <h6>React JS</h6>
                        </div>

                        {/* قسم شريط التمرير */}
                        <div className="col-lg-5 col-md-4 col-sm-12">
                            <Swiper
                                slidesPerView={3}           // عدد الشرائح المرئية في نفس الوقت
                                spaceBetween={30}           // المسافة بين كل شريحة وأخرى
                                pagination={{
                                    clickable: true,          // تفعيل النقاط وجعلها قابلة للنقر
                                }}
                                modules={[Pagination]}       // تضمين وحدة Pagination
                                className="mySwiper"
                            >
                                {/* الشرائح */}
                                <SwiperSlide>Slide 1</SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide 6</SwiperSlide>
                                <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-area account-wraper1">
                <div class="container-fluid">
                    <div class="appointment-inner appointment_inner section-sp2">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xl-5 col-lg-6 col-md-6">
                                    <div class="appointment-form form-wraper">
                                        <h3 class="title">Book Appointment</h3>
                                        <Booking />
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-6 col-md-6">
                                    <div class="appointment-thumb">
                                        <img className='img_par' src={Appointment1} alt="" />
                                        <div class="images-group">
                                            <img class="img1" src={Appointment2} alt="" />
                                            <img class="img2" src={Appointment3} alt="" />
                                            <img class="img3" src={Appointment4} alt="" />
                                            <img class="img4" src={Appointment5} alt="" />
                                            <img class="img5" src={Appointment6} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <GoToTopButton />
        </>
    );
}

export default Home;