import React from "react";
import { animateScroll as scroll } from "react-scroll";
// Reac icons
import { AiOutlineRocket } from "react-icons/ai";
const Top = () => {
    return (
        <div>
            <AiOutlineRocket
                style={{
                    cursor: "pointer",
                    position: "relative",
                    bottom: "0",
                    zIndex: "10",
                    left: "50%",
                    color: "#212121",
                    height: "60px",
                    width: "60px",
                    marginBottom: "20px",
                    borderRadius: "50%",
                    background: "#fff",
                    padding: "10px",
                    boxShadow:
                        "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px",
                }}
                onClick={() => {
                    scroll.scrollToTop();
                }}
            />
        </div>
    );
};

export default Top;
