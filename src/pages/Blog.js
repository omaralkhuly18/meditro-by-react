import React from 'react';

import ImgBlogsOne from '../assets/blog1.jpg';
import ImgBlogsTwo from '../assets/blog2.jpg';
import ImgBlogsThree from '../assets/blog3.jpg';
import DoctorBlogsOne from '../assets/doctor2.jpeg';
import DoctorBlogsTwo from '../assets/doctor3.jpeg';
import DoctorBlogsThree from '../assets/doctor4.jpeg';
import DoctorBlogsFour from '../assets/doctor5.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt , faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./Blog.css"
import Banner from '../components/Banner/Banner';
const Blogs = () => {
    return (
        <>
            <Banner />
            <section className="section-area section-sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media post_media">
                                    <a href="javascript:void(0);">
                                        <img src={ ImgBlogsTwo} alt="" />
                                    </a>
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author">
                                            <a href="javascript:void(0);">
                                                <img src={ DoctorBlogsOne} alt="" />
                                                John deo
                                            </a>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            21 July 2021
                                        </li>
                                    </ul>
                                    <h4 className="post-title post_title">
                                        <a href="javascript:void(0);">
                                        Dental Care for Women is very important
                                    </a>
                                    </h4>
                                    <a href="javascript:void(0);" className="btn btn-outline-primary outline_primary btn-sm">
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media post_media">
                                    <a href="javascript:void(0);">
                                        <img src={ ImgBlogsThree} alt="" />
                                    </a>
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author">
                                            <a href="javascript:void(0);">
                                                <img src={ DoctorBlogsTwo} alt="" />
                                                Peter Packer
                                            </a>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            20 July 2021
                                        </li>
                                    </ul>
                                    <h4 className="post-title post_title">
                                        <a href="javascript:void(0);">
                                            In this hospital there are special surgeon
                                        </a>
                                    </h4>
                                    <a href="javascript:void(0);" className="btn btn-outline-primary outline_primary btn-sm">
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media post_media">
                                    <a href="javascript:void(0);"><img src={ ImgBlogsOne} alt="" /></a>
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author">
                                            <a href="javascript:void(0);">
                                                <img src={ DoctorBlogsThree} alt="" />
                                                Sonar Moyna
                                            </a>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            19 July 2021
                                        </li>
                                    </ul>
                                    <h4 className="post-title post_title">
                                        <a href="javascript:void(0);">
                                            Why Is Skin Surgeon Considered Underrated
                                        </a></h4>
                                    <a href="javascript:void(0);" className="btn btn-outline-primary outline_primary btn-sm">
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media post_media">
                                    <a href="javascript:void(0);">
                                        <img src={ ImgBlogsTwo} alt="" /></a>
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author">
                                            <a href="javascript:void(0);"><img src={ DoctorBlogsFour} alt="" />
                                                Kalina
                                            </a>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            18 July 2021
                                        </li>
                                    </ul>
                                    <h4 className="post-title post_title">
                                        <a href="javascript:void(0);">Understand Health Before You Regret
                                        </a>
                                    </h4>
                                    <a href="javascript:void(0);" className="btn btn-outline-primary outline_primary btn-sm">
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media post_media">
                                    <a href="javascript:void(0);">
                                        <img src={ ImgBlogsOne} alt="" /></a>
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author">
                                            <a href="javascript:void(0);"><img src={ DoctorBlogsOne} alt="" />
                                                Michel
                                            </a>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            17 July 2021
                                        </li>
                                    </ul>
                                    <h4 className="post-title post_title">
                                        <a href="javascript:void(0);">Health Will Be A Thing Of The Past And Here's Why.
                                        </a>
                                    </h4>
                                    <a href="javascript:void(0);" className="btn btn-outline-primary outline_primary btn-sm">
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media post_media">
                                    <a href="javascript:void(0);">
                                        <img src={ ImgBlogsTwo} alt="" /></a>
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author">
                                            <a href="javascript:void(0);"><img src={ DoctorBlogsTwo} alt="" />
                                                Peter Packer
                                            </a>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            16 July 2021
                                        </li>
                                    </ul>
                                    <h4 className="post-title post_title">
                                        <a href="javascript:void(0);">
                                            Can you get a diflucan prescription online?
                                        </a>
                                    </h4>
                                    <a href="javascript:void(0);" className="btn btn-outline-primary outline_primary btn-sm">
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media post_media">
                                    <a href="javascript:void(0);">
                                        <img src={ ImgBlogsThree} alt="" /></a>
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author">
                                            <a href="javascript:void(0);"><img src={ DoctorBlogsThree} alt="" />
                                                Sonar Moyna
                                            </a>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            15 July 2021
                                        </li>
                                    </ul>
                                    <h4 className="post-title post_title">
                                        <a href="javascript:void(0);">
                                            Ten Gigantic Influences Of Health
                                        </a>
                                    </h4>
                                    <a href="javascript:void(0);" className="btn btn-outline-primary outline_primary btn-sm">
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media post_media">
                                    <a href="javascript:void(0);">
                                        <img src={ ImgBlogsOne} alt="" />
                                    </a>
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author">
                                            <a href="javascript:void(0);"><img src={ DoctorBlogsFour} alt="" />
                                                Kalina
                                            </a>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            14 July 2021
                                        </li>
                                    </ul>
                                    <h4 className="post-title post_title">
                                        <a href="javascript:void(0);">
                                            Why Is Skin Surgeon Considered Underrated
                                        </a>
                                    </h4>
                                    <a href="javascript:void(0);" className="btn btn-outline-primary outline_primary btn-sm">
                                        Read More <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card blog_card mb-30">
                                <div className="post-media post_media">
                                    <a href="javascript:void(0);">
                                        <img src={ImgBlogsTwo} alt="" />
                                    </a>
                                </div>
                                <div className="post-info post_info">
                                    <ul className="post-meta post_meta">
                                        <li className="author"><a href="javascript:void(0);">
                                            <img src={DoctorBlogsOne} alt="" />
                                            Michel
                                        </a>
                                        </li>
                                        <li className="date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            13 July 2021
                                        </li>
                                    </ul>
                                    <h4 className="post-title post_title">
                                        <a href="javascript:void(0);">
                                            Everyone need to go Dentist regularly
                                        </a>
                                    </h4>
                                    <a href="javascript:void(0);" className="btn btn-outline-primary outline_primary btn-sm">
                                        Read More
                                        <FontAwesomeIcon className="btn-icon-bx" icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pagination-bx text-center mb-30 clearfix">
                                <ul className="pagination">
                                    <li className="previous"><a onClick="javascript:void(0);">Prev</a></li>
                                    <li className="active"><a onClick="javascript:void(0);">1</a></li>
                                    <li><a onClick="javascript:void(0);">2</a></li>
                                    <li><a onClick="javascript:void(0);">3</a></li>
                                    <li className="next"><a onClick="javascript:void(0);">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;