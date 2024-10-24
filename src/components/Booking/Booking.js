import React from "react";
import { Dropdown } from 'react-bootstrap';
import './Appointment.css';
const Booking = () => {
    return(
        <form action="#">
            <div className="form-group">
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Select Department
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
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
                        <Dropdown.Item href="#/action-1">One</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Two</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Three</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name" />
            </div>
            <div class="form-group">
                <input type="number" class="form-control" placeholder="Phone Numbers" />
            </div>
            <div class="form-group">
                <input type="date" class="form-control" />
            </div>
            <button type="submit" class="btn btn-secondary btn-lg">Appointment Now</button>
        </form>
    );
}

export default Booking;