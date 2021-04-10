import React from "react";
import Button from "../Button/Button";

const ReservationForm = () => {
    return (
        <div className="reservation-wrapper">
            <form className="reservation-form">
                <div className="first-name reservation-flex">
                    <label>First name *</label>
                    <input type="text" className="reservation-input" required />
                </div>
                <div className="last-name reservation-flex">
                    <label>Last name *</label>
                    <input type="text" className="reservation-input" required />
                </div>
                <div className="phone expand reservation-flex">
                    <label>Phone Number *</label>
                    <input type="tel" className="reservation-input" required />
                </div>
                <div className="email expand reservation-flex">
                    <label>Email *</label>
                    <input
                        type="email"
                        className="reservation-input"
                        required
                    />
                </div>
                <div className="date expand reservation-flex">
                    <label>Reservation Date *</label>
                    <input type="date" className="reservation-input" required />
                </div>
                <div className="guests expand reservation-flex">
                    <label>Guests *</label>
                    <input
                        type="number"
                        className="reservation-input"
                        min="1"
                        max="100"
                        required
                    />
                </div>
                <div className="message expand reservation-flex">
                    <label>Message</label>
                    <input type="text" className="reservation-input" />
                </div>
            </form>
            <Button setText="Reserve Table" setMargin="20px" />
        </div>
    );
};

export default ReservationForm;
