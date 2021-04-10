import React from "react";

const Map = () => {
    const location = {
        address: "69 Balmy Beach Road, Owen Sound, ON",
        lat: 44.641553,
        lgn: -80.933201,
    };
    return (
        <div>
            <iframe
                className="mymap"
                width="400"
                height="300"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.8256120354954!2d-80.94793018427674!3d44.62104027910005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8829fd7551aedec5%3A0x3b4c76a00c446bc6!2s69%20Balmy%20Beach%20Rd%2C%20Owen%20Sound%2C%20ON%20N4K%205N4!5e0!3m2!1sen!2sca!4v1613346682078!5m2!1sen!2sca"
                style={{
                    frameBorder: "0",
                    allowFullScreen: "",
                    ariaHidden: "false",
                    tabIndex: "0",
                    border: "none",
                    borderRadius: "10px",
                }}
            ></iframe>
        </div>
    );
};

export default Map;
