import React from "react";
import SmokeVideo from "../../video/smokeVideo.mp4";
import BurgerImage from "../../Images/burgerImage.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Special.css";
const Special = () => {
    return (
        <div className="special">
            <div className="special-container">
                <video autoPlay loop muted id="myVideo">
                    <source src={SmokeVideo} type="video/mp4" />
                </video>
            </div>
            <div className="special-content">
                <div className="special-overlay">
                    <img
                        style={{ marginLeft: "-50px" }}
                        src={BurgerImage}
                        alt="Special-burger"
                        className="burger-image"
                    />
                    <div className="burger-info">
                        <p
                            style={{ marginBottom: "30px" }}
                            className="large-text"
                        >
                            New Megaton Burger
                        </p>
                        <p className="small-text">
                            This veggie burger recipe is both vegetarian and
                            vegan but it has bread in the mix so it isn't
                            gluten-free. Combine mashed beans, bread, chopped
                            onions, and seasoning and make patties. Because the
                            patties aren't dense, these are best when pan-fried
                            or baked.
                        </p>
                        <Link to="/menu">
                            <Button setText={`View Menu`} setMargin={`30px`} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;
