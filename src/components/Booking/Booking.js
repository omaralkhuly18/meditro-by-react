import React from "react";
import { Dropdown } from 'react-bootstrap';
import './Appointment.css';
const Booking = () => {
    return (
        <section className="section_book">
            <div className="container">
                <form action="#">
                    <div className="form-group">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Select Department
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className="active" href="#/action-1">Selecty Department</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">One</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Two</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Three</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    {/* Select Doctor Dropdown */}
                    <div className="form-group">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Select Doctor
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className="active" href="#/action-1">Selecty Department</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">One</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Two</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Three</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Phone Numbers" />
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control control_date" />
                    </div>
                    <button type="submit" className="btn btn-secondary btn_secondary btn-lg">Appointment Now</button>
                </form>
            </div>
        </section>
    );
}

export default Booking;