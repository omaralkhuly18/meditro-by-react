import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import './about.css';
import Banner from '../components/Banner/Banner';
import GoToTopButton from '../components/buttonGoToTop/ButtonGoToTop';
const About = () => {
    return (
        <>
        <Banner />
        <AboutUs/>
        <GoToTopButton/>
        </>
    );
}

export default About;