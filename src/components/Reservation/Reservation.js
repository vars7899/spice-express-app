import React from "react";
import ReservationForm from "./ReservationForm";
import ReservationTittle from "./ReservationTittle";
import "./Reservation.css";
const Reservation = () => {
    return (
        <div className="reservation-container">
            <div className="reservation">
                <ReservationTittle />
                <ReservationForm />
            </div>
        </div>
    );
};

export default Reservation;
