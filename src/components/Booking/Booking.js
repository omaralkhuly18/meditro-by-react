
import React, { useState } from "react";
import { Dropdown } from 'react-bootstrap';
import { departments, doctors } from '../../Data/DataBooks'; // استيراد البيانات 
import { useNavigate } from 'react-router-dom';
import './Appointment.css';

const Booking = () => {
    const navigate = useNavigate();
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: ""
    });
    const [errors, setErrors] = useState({ name: "", phone: "" });

    // دالة للتحقق من صحة البيانات
    const validateForm = () => {
        const nameRegex = /^[a-zA-Z\s]{3,}$/; // يسمح بأحرف فقط (3 أحرف أو أكثر)
        const phoneRegex = /^(\+?\d{1,4}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
         // يدعم أرقام الهاتف مع رموز الدولة
        //  هذا التعبير النمطي يمكنه مطابقة أرقام الهاتف بأحد التنسيقات التالية:
        //  1234567890
        //  123-456-7890
        //  123.456.7890
        //  123 456 7890
        //  (123) 456-7890
        //  +1 123 456 7890
        //  +1 (123) 456-7890

        let nameError = "";
        let phoneError = "";

        if (!nameRegex.test(formData.name)) {
            nameError = "Please enter a valid name (only letters, 3 or more characters).";
        }

        if (!phoneRegex.test(formData.phone)) {
            phoneError = "Please enter a valid phone number.";
        }

        setErrors({ name: nameError, phone: phoneError });
        return !nameError && !phoneError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // إذا كانت البيانات صالحة، يتم التنقل إلى صفحة التفاصيل
            navigate('/DetailsPage', { state: 
                { ...formData, 
                    department: selectedDepartment, 
                    doctor: selectedDoctor } });
        }
    };

    return (
        <section className="section_book">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    {/* Dropdown لقسم Select Department */}
                    <div className="form-group">
                        <Dropdown onSelect={(e) => setSelectedDepartment(e)}>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                {selectedDepartment || "Select Department"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item disabled>{selectedDepartment ? "Change Department" : "Select Department"}</Dropdown.Item>
                                {departments.map(dept => (
                                    <Dropdown.Item key={dept.id} eventKey={dept.name}>
                                        {dept.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    {/* Dropdown لطبيب Select Doctor */}
                    <div className="form-group">
                        <Dropdown onSelect={(e) => setSelectedDoctor(e)}>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                {selectedDoctor || "Select Doctor"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item disabled>{selectedDoctor ? "Change Doctor" : "Select Doctor"}</Dropdown.Item>
                                {doctors
                                    .filter(doctor => !selectedDepartment || departments.find(dept => dept.name === selectedDepartment && dept.id === doctor.departmentId))
                                    .map(doc => (
                                        <Dropdown.Item key={doc.id} eventKey={doc.name}>
                                            {doc.name}
                                        </Dropdown.Item>
                                    ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    {/* حقل الإسم */}
                    <div className="form-group input_div">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>

                    {/* حقل رقم الهاتف */}
                    <div className="form-group input_div">
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone Numbers"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                        />
                        {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    </div>

                    {/* حقل التاريخ */}
                    <div className="form-group input_div">
                        <input
                            type="date"
                            className="form-control control_date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-secondary btn_secondary btn-lg">Appointment Now</button>
                </form>
            </div>
        </section>
    );
}

export default Booking;
