import React from 'react';
import './home.css';
import ImgOne from '../assets/bg_img.png';

import ImgInmaOne from '../assets/img_inemation1.png';
import ImgInmaTwo from '../assets/img_inemation2.png';
import ImgInmaThree from '../assets/img_inemation4.png';
import ImgInmaFour from '../assets/img_inemation9.png';
import ImgInmaFive from '../assets/img_inemation12.png';
const Home = () => {
    return (
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
                            <img src={ImgOne} alt='bg-img' className='imgOne'/>
                        </div>
                    </div>
                </div>
            </div>
            <img className='img_inm1 subscriber' src={ImgInmaOne}/>
            <img className='img_inm2 subscriber' src={ImgInmaTwo}/>
            <img className='img_inm3 subscriber' src={ImgInmaThree}/>
            <img className='img_inm4 subscriber' src={ImgInmaFour}/>
            <img className='img_inm5 subscriber' src={ImgInmaFive}/>
        </header>
    );
}

export default Home;