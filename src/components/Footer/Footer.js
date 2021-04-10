import React from "react";
import { GoLocation, GoGlobe } from "react-icons/go";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="about-us">
                    <p
                        style={{
                            fontWeight: "800",
                            marginBottom: "25px",
                            textAlign: "center",
                        }}
                    >
                        About Us
                    </p>
                    <p className="light">
                        At Spice Express, our mission is simple: enhance and
                        educate the palate with the freshest ingredients and
                        flavors, while surprising and exciting each guest with
                        personal care and service.
                    </p>
                </div>
                <div className="contact-us">
                    <p
                        style={{
                            fontWeight: "800",
                            marginBottom: "25px",
                            textAlign: "center",
                        }}
                    >
                        Contact us
                    </p>
                    <div className="contact-us-content light">
                        <div className="contact-us-location contact-us-adjust">
                            <GoLocation style={{ marginRight: "20px" }} />
                            <p>69 Balmy Beach Road, ON </p>
                        </div>
                        <div className="contact-us-phone contact-us-adjust">
                            <AiOutlinePhone style={{ marginRight: "20px" }} />
                            <p>519-370-3695</p>
                        </div>
                        <div className="contact-us-mail contact-us-adjust">
                            <AiOutlineMail style={{ marginRight: "20px" }} />
                            <p>vaibhav.dhiman.my@gmail.com</p>
                        </div>
                        <div className="contact-us-website contact-us-adjust">
                            <GoGlobe style={{ marginRight: "20px" }} />
                            <p>www.craving.com</p>
                        </div>
                    </div>
                </div>
                <div className="opening-hours">
                    <p
                        style={{
                            fontWeight: "800",
                            marginBottom: "25px",
                            textAlign: "center",
                        }}
                    >
                        Opening Hours
                    </p>
                    <div className="light">
                        <div className="day">
                            <div className="left-day">Mon-Thur</div>
                            <div className="right-day">08:00 AM - 10:00 PM</div>
                        </div>
                        <div className="day">
                            <div className="left-day">Fri-Sat</div>
                            <div className="right-day">08:00 AM - 10:00 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
