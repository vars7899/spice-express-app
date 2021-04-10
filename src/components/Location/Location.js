import React from "react";
import Map from "./Map";
const Location = () => {
    return (
        <div className="location" id="contact-info">
            <Map />
            <div className="location-content">
                <p style={{ marginBottom: "20px" }} className="medium-text">
                    STORE INFO
                </p>
                <div className="location-entry">
                    <p className="medium-text">69 Balmy Beach Road</p>
                    <p className="medium-text">Owen Sound, ON</p>
                    <p className="medium-text">Phone: (519)-370-3695</p>
                    <p className="medium-text">
                        Email: vaibhav.dhiman.my@gmail.com
                    </p>
                    <p className="medium-text">www.cravingsupport.com</p>
                </div>
            </div>
        </div>
    );
};

export default Location;
