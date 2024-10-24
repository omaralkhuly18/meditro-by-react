import React from "react";
import Booking from '../components/Booking/Booking';
import Banner from "../components/Banner/Banner";
import GoToTopButton from '../components/buttonGoToTop/ButtonGoToTop';
const Reservation = () => {
    return (
        <>
            <Banner />
            <Booking />
            <GoToTopButton />
        </>
    );
}

export default Reservation;