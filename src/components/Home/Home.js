import React from "react";
import Mygif from "../../video/mygif.gif";
import Mygif2 from "../../video/mygif2.gif";
import Button from "../Button/Button";
import Services from "../Services/Services";
import Special from "../Special/Special";
import Health from "../Health/Health";
import Location from "../Location/Location";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
    return (
        <div className="wrapper">
            <div className="home">
                <img
                    src={Mygif2}
                    id="homeGif2"
                    style={{
                        zIndex: "0",
                        transform: "rotate(-20deg)",
                        maxHeight: "200px",
                        overflowY: "hidden",
                    }}
                />
                <div className="home-container">
                    <div className="home-content-1">
                        <p className="home-box-1">Spice Express</p>
                        <p className="home-box-2 light">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Temporibus, quaerat. Enim id placeat rerum
                            molestiae qui deleniti cupiditate veniam et.
                        </p>
                        <div className="btn-group">
                            <Link to="/reservation">
                                <Button
                                    setText={`BOOK A TABLE`}
                                    setMargin={`30px`}
                                    className="control-margin"
                                />
                            </Link>
                            <Link to="/menu">
                                <Button
                                    setText={`MENU`}
                                    setMargin={`30px`}
                                    className="control-margin"
                                />
                            </Link>
                        </div>
                    </div>
                    <img src={Mygif} id="homeGif" />
                </div>
            </div>
            <Services />
            <Special />
            <Health />
            <Location />
        </div>
    );
};

export default Home;
