import React from "react";
import MyImage from "../../Images/myImage.png";
import "./About.css";
const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <img className="myimage" src={MyImage} alt="Vaibhav Dhiman" />
                <div className="about-content">
                    <p className="medium-text">Hi my name is</p>
                    <p className="large-text">Vaibhav Dhiman</p>
                </div>
            </div>
        </div>
    );
};

export default About;
