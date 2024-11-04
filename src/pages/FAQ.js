import React from 'react';
import Banner from '../components/Banner/Banner';
import './FAQ.css';
const PageNotFound = () => {
    return (
        <>
            <Banner />
            <section className='section-area section-sp2 error-404'>
                <div className="container">
                    <div className="inner-content">
                        <h2 className="error-title">
                            4
                            <span></span>
                            4
                        </h2>
                        <h3 className="error-text">
                            The Page you were looking for, couldn't be found.
                        </h3>
                        <p className="error-pra">
                            The page you are looking for might have been removed,
                            had its name changed, or is temporarily unavailable.
                        </p>
                        <div className="clearfix">
                            <a className="btn btn-primary btnprimary m-r5 btn_one" href="/Home">
                                Back
                            </a>
                            <a className="btn btn-primary btnprimary btn_two" href="/Home">
                                Back To Home
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PageNotFound;