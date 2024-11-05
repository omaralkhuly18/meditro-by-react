import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgBlogsOne from '../assets/blog1.jpg';
import ImgBlogsTwo from '../assets/blog2.jpg';
import ImgBlogsThree from '../assets/blog3.jpg';
import DoctorBlogsOne from '../assets/doctor2.jpeg';
import DoctorBlogsTwo from '../assets/doctor3.jpeg';
import DoctorBlogsThree from '../assets/doctor4.jpeg';
import DoctorBlogsFour from '../assets/doctor5.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./Blog.css";
import Banner from '../components/Banner/Banner';

const Blogs = () => {
    const navigate = useNavigate();

    // دالة التنقل إلى تفاصيل المدونة
    const handleBlogClick = (blogType) => {
        navigate(`/BlogsDetails/${blogType}`);
    };

    // دالة التنقل إلى صفحة المجموعات الخاصة بالمدونة
    const handleDoctorClick = (doctorName) => {
        navigate(`/BlogDetailsSpicial/${doctorName}`);
    };

    return (
        <>
            <Banner />
            <section className="section-area section-sp1">
                <div className="container">
                    <div className="row">
                        {/* بطاقة المدونة الأولى */}
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media  post_media">
                                    <img
                                        src={ImgBlogsOne}
                                        alt="discrption"
                                        onClick={() => handleBlogClick('Dental Care')}
                                    />
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author nameDoctor">
                                            <img
                                                src={DoctorBlogsOne}
                                                alt="discrption"
                                                onClick={() => handleDoctorClick('John Deo')}
                                            />
                                            <span onClick={() => handleDoctorClick('John Deo')}>John Deo</span>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> 21 July 2021
                                        </li>
                                    </ul>
                                    <h4
                                        className="post-title post_title"
                                        onClick={() => handleBlogClick('Dental Care')}
                                    >
                                        Dental Care for Women is very important
                                    </h4>
                                    <button
                                        className="btn  outline_primary btn-sm"
                                        onClick={() => handleBlogClick('Dental Care')}
                                    >
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* بطاقة المدونة الثانية */}
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media  post_media">
                                    <img
                                        src={ImgBlogsTwo}
                                        alt="discrption"
                                        onClick={() => handleBlogClick('Special Surgeon')}
                                    />
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author nameDoctor">
                                            <img
                                                src={DoctorBlogsTwo}
                                                alt="discrption"
                                                onClick={() => handleDoctorClick('Peter Packer')}
                                            />
                                            <span onClick={() => handleDoctorClick('Peter Packer')}>Peter Packer</span>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> 20 July 2021
                                        </li>
                                    </ul>
                                    <h4
                                        className="post-title post_title"
                                        onClick={() => handleBlogClick('Special Surgeon')}
                                    >
                                        In this hospital there are special surgeons
                                    </h4>
                                    <button
                                        className="btn  outline_primary btn-sm"
                                        onClick={() => handleBlogClick('Special Surgeon')}
                                    >
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* بطاقة المدونة الثالثة */}
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media  post_media">
                                    <img
                                        src={ImgBlogsThree}
                                        alt="discrption"
                                        onClick={() => handleBlogClick('Skin Surgeon')}
                                    />
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta post_meta">
                                        <li className="author nameDoctor">
                                            <img
                                                src={DoctorBlogsThree}
                                                alt="discrption"
                                                onClick={() => handleDoctorClick('Sonar Moyna')}
                                            />
                                            <span onClick={() => handleDoctorClick('Sonar Moyna')}>Sonar Moyna</span>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> 19 July 2021
                                        </li>
                                    </ul>
                                    <h4
                                        className="post-title post_title"
                                        onClick={() => handleBlogClick('Skin Surgeon')}
                                    >
                                        Why Is Skin Surgeon Considered Underrated
                                    </h4>
                                    <button
                                        className="btn  outline_primary btn-sm"
                                        onClick={() => handleBlogClick('Skin Surgeon')}
                                    >
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* بطاقة المدونة الرابعة */}
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media  post_media">
                                    <img
                                        src={ImgBlogsTwo}
                                        alt="discrption"
                                        onClick={() => handleBlogClick('Understand Health')}
                                    />
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author nameDoctor">
                                            <img
                                                src={DoctorBlogsFour}
                                                alt="discrption"
                                                onClick={() => handleDoctorClick('Kalina')}
                                            />
                                            <span onClick={() => handleDoctorClick('Kalina')}>Kalina</span>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> 18 July 2021
                                        </li>
                                    </ul>
                                    <h4
                                        className="post-title post_title"
                                        onClick={() => handleBlogClick('Understand Health')}
                                    >
                                        Understand Health Before You Regret
                                    </h4>
                                    <button
                                        className="btn  outline_primary btn-sm"
                                        onClick={() => handleBlogClick('Understand Health')}
                                    >
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* بطاقة المدونة الخامسة */}
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media  post_media">
                                    <img
                                        src={ImgBlogsOne}
                                        alt="discrption"
                                        onClick={() => handleBlogClick('Health in the Past')}
                                    />
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author nameDoctor">
                                            <img
                                                src={DoctorBlogsOne}
                                                alt="discrption"
                                                onClick={() => handleDoctorClick('Michel')}
                                            />
                                            <span onClick={() => handleDoctorClick('Michel')}>Michel</span>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> 17 July 2021
                                        </li>
                                    </ul>
                                    <h4
                                        className="post-title post_title"
                                        onClick={() => handleBlogClick('Health in the Past')}
                                    >
                                        Health Will Be A Thing Of The Past And Here's Why.
                                    </h4>
                                    <button
                                        className="btn  outline_primary btn-sm"
                                        onClick={() => handleBlogClick('Health in the Past')}
                                    >
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* بطاقة المدونة السادسة */}
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media  post_media">
                                    <img
                                        src={ImgBlogsTwo}
                                        alt="discrption"
                                        onClick={() => handleBlogClick('Diflucan Prescription')}
                                    />
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author nameDoctor">
                                            <img
                                                src={DoctorBlogsTwo}
                                                alt="discrption"
                                                onClick={() => handleDoctorClick('Peter Packer')}
                                            />
                                            <span onClick={() => handleDoctorClick('Peter Packer')}>Peter Packer</span>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> 16 July 2021
                                        </li>
                                    </ul>
                                    <h4
                                        className="post-title post_title"
                                        onClick={() => handleBlogClick('Diflucan Prescription')}
                                    >
                                        Can you get a diflucan prescription online?
                                    </h4>
                                    <button
                                        className="btn  outline_primary btn-sm"
                                        onClick={() => handleBlogClick('Diflucan Prescription')}
                                    >
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* بطاقة المدونة السابعة */}
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media  post_media">
                                    <img
                                        src={ImgBlogsThree}
                                        alt="discrption"
                                        onClick={() => handleBlogClick('Gigantic Influences of Health')}
                                    />
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author nameDoctor">
                                            <img
                                                src={DoctorBlogsThree}
                                                alt="discrption"
                                                onClick={() => handleDoctorClick('Sonar Moyna')}
                                            />
                                            <span onClick={() => handleDoctorClick('Sonar Moyna')}>Sonar Moyna</span>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> 15 July 2021
                                        </li>
                                    </ul>
                                    <h4
                                        className="post-title post_title"
                                        onClick={() => handleBlogClick('Gigantic Influences of Health')}
                                    >
                                        Ten Gigantic Influences Of Health
                                    </h4>
                                    <button
                                        className="btn  outline_primary btn-sm"
                                        onClick={() => handleBlogClick('Gigantic Influences of Health')}
                                    >
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* بطاقة المدونة الثامنة */}
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media  post_media">
                                    <img
                                        src={ImgBlogsOne}
                                        alt="discrption"
                                        onClick={() => handleBlogClick('Underrated Skin Surgeon')}
                                    />
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author nameDoctor">
                                            <img
                                                src={DoctorBlogsFour}
                                                alt="discrption"
                                                onClick={() => handleDoctorClick('Kalina')}
                                            />
                                            <span onClick={() => handleDoctorClick('Kalina')}>Kalina</span>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> 14 July 2021
                                        </li>
                                    </ul>
                                    <h4
                                        className="post-title post_title"
                                        onClick={() => handleBlogClick('Underrated Skin Surgeon')}
                                    >
                                        Why Is Skin Surgeon Considered Underrated
                                    </h4>
                                    <button
                                        className="btn  outline_primary btn-sm"
                                        onClick={() => handleBlogClick('Underrated Skin Surgeon')}
                                    >
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* بطاقة المدونة التاسعة */}
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media  post_media">
                                    <img
                                        src={ImgBlogsTwo}
                                        alt="discrption"
                                        onClick={() => handleBlogClick('Dentist Regularly')}
                                    />
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author nameDoctor">
                                            <img
                                                src={DoctorBlogsOne}
                                                alt="discrption"
                                                onClick={() => handleDoctorClick('Michel')}
                                            />
                                            <span onClick={() => handleDoctorClick('Michel')}>Michel</span>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> 13 July 2021
                                        </li>
                                    </ul>
                                    <h4
                                        className="post-title post_title"
                                        onClick={() => handleBlogClick('Dentist Regularly')}
                                    >
                                        Everyone needs to go Dentist regularly
                                    </h4>
                                    <button
                                        className="btn  outline_primary btn-sm"
                                        onClick={() => handleBlogClick('Dentist Regularly')}
                                    >
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;
