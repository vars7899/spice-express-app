import React from "react";

const Button = ({ setText, setMargin, setColor, setBorderColor }) => {
    return (
        <div>
            <button
                style={{
                    marginTop: `${setMargin}`,
                    color: `${setColor}`,
                    borderColor: `${setBorderColor}`,
                }}
                className="btn"
            >
                {setText}
            </button>
        </div>
    );
};

export default Button;
