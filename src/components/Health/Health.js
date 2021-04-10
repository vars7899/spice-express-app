import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Health = () => {
    return (
        <div className="health">
            <div className="health-container">
                <p className="small-text alignment">
                    Craving COVID-19 response and safety
                </p>
                <Link to="/health">
                    <Button
                        setText="Learn More"
                        setMargin={`30px`}
                        setBorderColor={`#212121`}
                        setColor={`#212121`}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Health;
