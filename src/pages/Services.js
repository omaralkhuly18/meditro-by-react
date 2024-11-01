import React from 'react';
import "./Services.css";

import Stethoscope from '../assets/stethoscope.png'
import FirstAidKit from '../assets/first-aid-kit.png';
import Syringe from '../assets/syringe.png';
import MedicineBottle from '../assets/MedicineBottle.png';
import Ambulance from '../assets/Ambulance.png';
import QualifiedDoctors from '../assets/QualifiedDoctors.png';

import DoctorTeam from "../components/DoctorTeam/DoctorTeam";
import Ratings from '../components/Ratings/Ratings';
import Banner from '../components/Banner/Banner';
const Services = () => {
	return (
		<>
			<Banner />
			<section className="section-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="feature-container feature-bx2 feature1">
								<div className="feature-box-xl mb-20">
									<span className="icon-cell">
										<img src={Stethoscope} />
									</span>
								</div>
								<div className="icon-content">
									<h3 className="ttr-title">Diagnostics</h3>
									<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
									<a href="service-detail.html" className="btn btn-primary light">View More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="feature-container feature-bx2 feature2">
								<div className="feature-box-xl mb-20">
									<span className="icon-cell">
										<img src={FirstAidKit} />
									</span>
								</div>
								<div className="icon-content">
									<h3 className="ttr-title">Treatment</h3>
									<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
									<a href="service-detail.html" className="btn btn-primary light">View More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="feature-container feature-bx2 feature3">
								<div className="feature-box-xl mb-20">
									<span className="icon-cell">
										<img src={Syringe} />
									</span>
								</div>
								<div className="icon-content">
									<h3 className="ttr-title">Surgery</h3>
									<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
									<a href="service-detail.html" className="btn btn-primary light">View More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="feature-container feature-bx2 feature2">
								<div className="feature-box-xl mb-20">
									<span className="icon-cell">
										<img src={MedicineBottle} />
									</span>
								</div>
								<div className="icon-content">
									<h3 className="ttr-title">Emergency</h3>
									<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
									<a href="service-detail.html" className="btn btn-primary light">View More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="feature-container feature-bx2 feature3">
								<div className="feature-box-xl mb-20">
									<span className="icon-cell">
										<img src={Ambulance} />
									</span>
								</div>
								<div className="icon-content">
									<h3 className="ttr-title">Vaccine</h3>
									<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
									<a href="service-detail.html" className="btn btn-primary light">View More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="feature-container feature-bx2 feature1">
								<div className="feature-box-xl mb-20">
									<span className="icon-cell">
										<img src={QualifiedDoctors} />
									</span>
								</div>
								<div className="icon-content">
									<h3 className="ttr-title">Qualified Doctors</h3>
									<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
									<a href="service-detail.html" className="btn btn-primary light">View More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Ratings/>
			<DoctorTeam/>
		</>
	);
}

export default Services;