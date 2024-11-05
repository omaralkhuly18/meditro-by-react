import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

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

import Stethoscope from '../assets/stethoscope.png'
import FirstAidKit from '../assets/first-aid-kit.png';
import Syringe from '../assets/syringe.png';
import MedicineBottle from '../assets/MedicineBottle.png';
import Ambulance from '../assets/Ambulance.png' ;
const Home = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-6 col-sm-7 height_col'>
                            <h5>We Provide All Health Care Solution</h5>
                            <h2>Protect Your Health And Take Care To Of Your Health</h2>
                            <button><a href='/about'>Read More</a></button>
                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-5'>
                            <div className='img_bg_one'>
                                <img src={ImgOne} alt='bg-img' className='imgOne' />
                            </div>
                        </div>
                    </div>
                </div>
                <img className='img_inm1 subscriber' alt="discrption" src={ImgInmaOne} />
                <img className='img_inm2 subscriber' alt="discrption" src={ImgInmaTwo} />
                <img className='img_inm3 subscriber' alt="discrption" src={ImgInmaThree} />
                <img className='img_inm4 subscriber' alt="discrption" src={ImgInmaFour} />
                <img className='img_inm5 subscriber' alt="discrption" src={ImgInmaFive} />
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
                                <Link to="/services" className="btn btn-primary btn_primary lights light">
                                    <span> View More </span>
                                    <FontAwesomeIcon icon={faArrowRight} className='btn-icon-bx' />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="work-bx active">
                                <div className="work-num-bx">02</div>
                                <div className="work-content">
                                    <h5 className="title text-secondary mb-10">Take Treatment</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                </div>
                                <Link to="/services" className="btn btn-primary btn_primary lights light">
                                    <span> View More </span>
                                    <FontAwesomeIcon icon={faArrowRight} className='btn-icon-bx' />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="work-bx">
                                <div className="work-num-bx">03</div>
                                <div className="work-content">
                                    <h5 className="title text-secondary mb-10">Registration</h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                </div>
                                <Link to="/services" className="btn btn-primary btn_primary lights light">
                                    <span> View More </span>
                                    <FontAwesomeIcon icon={faArrowRight} className='btn-icon-bx' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-area section-sp1 
            service-wraper service_wraper'>
                <div className="container">
                    <div className="row align-items-center">
                        {/* قائمة العناصر الثابتة */}
                        <div className="col-xl-4 col-lg-7 mb-30">
                            <div className="heading-bx">
                                <h6 className="title-ext">Services</h6>
                                <h2 className="title">We Cover A Big Variety Of Medical Services</h2>
                                <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                            </div>
                            <Link to="/services" className="btn btn-secondary btn_secondary btn-lg shadow">
                                All Services
                            </Link>
                        </div>

                        {/* قسم شريط التمرير */}
                        <div className="col-xl-8 mb-15">
                            <Swiper
                                slidesPerView={3}           // عدد الشرائح المرئية في نفس الوقت
                                spaceBetween={20}           // المسافة بين كل شريحة وأخرى
                                pagination={{
                                    clickable: true,          // تفعيل النقاط وجعلها قابلة للنقر
                                }}
                                modules={[Pagination]}       // تضمين وحدة Pagination
                                className="mySwiper"
                            >
                                {/* الشرائح */}
                                <SwiperSlide>
                                    <div className="feature-container feature-bx2 feature1">
                                        <div className="feature-box-xl mb-30">
                                            <span className="icon-cell">
                                                <img alt="discrption" src={Stethoscope}/>
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="ttr-title">Diagnostics</h3>
                                            <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                            <Link to="/ServicesDetails/Diagnostics" className="btn btn-primary light">View More</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="feature-container feature-bx2 feature2">
                                        <div className="feature-box-xl mb-20">
                                            <span className="icon-cell">
                                                <img alt="discrption" src={MedicineBottle}/>
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="ttr-title">Treatment</h3>
                                            <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                           <Link to="/ServicesDetails/Treatment" className="btn btn-primary light">View More</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="feature-container feature-bx2 feature3">
                                        <div className="feature-box-xl mb-20">
                                            <span className="icon-cell">
                                            <img alt="discrption" src={FirstAidKit}/>
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="ttr-title">Surgery</h3>
                                            <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                            <Link to="/ServicesDetails/Surgery" className="btn btn-primary light">View More</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="feature-container feature-bx2 feature1">
                                        <div className="feature-box-xl mb-20">
                                            <span className="icon-cell">
                                            <img alt="discrption" src={Syringe}/>
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="ttr-title">Vaccine</h3>
                                            <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                            <Link to="/ServicesDetails/Vaccine" className="btn btn-primary light">View More</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="feature-container feature-bx2 feature2">
                                        <div className="feature-box-xl mb-20">
                                            <span className="icon-cell">
                                                <img alt="discrption" src={Ambulance}/>
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="ttr-title">Emergency</h3>
                                            <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                           <Link to="/ServicesDetails/Emergency" className="btn btn-primary light">View More</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-area account-wraper1">
                <div className="container-fluid">
                    <div className="appointment-inner appointment_inner section-sp2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-6 col-md-6">
                                    <div className="appointment-form form-wraper">
                                        <h3 className="title">Book Appointment</h3>
                                        <Booking />
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-6">
                                    <div className="appointment-thumb">
                                        <img className='img_par' src={Appointment1} alt="discrption" />
                                        <div className="images-group">
                                            <img className="img1" src={Appointment2} alt="discrption" />
                                            <img className="img2" src={Appointment3} alt="discrption" />
                                            <img className="img3" src={Appointment4} alt="discrption" />
                                            <img className="img4" src={Appointment5} alt="discrption" />
                                            <img className="img5" src={Appointment6} alt="discrption" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;