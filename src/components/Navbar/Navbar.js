import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { MdFormatAlignCenter, MdClear } from "react-icons/md";
import { GiAzulFlake } from "react-icons/gi";
import "./Navbar.css";
import Data from "./Navlist";
const Navbar = () => {
    const [burger, setBurger] = useState(false);
    return (
        <div className="navbar-wrapper">
            <div className="logo-container">
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        scroll.scrollToTop();
                        burger && setBurger(!burger);
                    }}
                >
                    <GiAzulFlake
                        style={{ height: "2rem", marginTop: "1rem" }}
                    />
                </Link>
            </div>
            <div
                className="burger-container"
                onClick={() => {
                    setBurger(!burger);
                }}
            >
                {burger ? <MdClear /> : <MdFormatAlignCenter />}
            </div>

            <div
                className={
                    burger
                        ? "navlist-container navlist-mobile"
                        : "navlist-container "
                }
            >
                <div className="navlist-content">
                    {/* {Data.data.map((item) => {
                        return (
                            <li className="nav" key={Math.random()}>
                                <Link
                                    to={`/` + `${item.replace(/\s+/g, "")}`}
                                    onClick={() => {
                                        setBurger(!burger);
                                    }}
                                    className="navlink"
                                >
                                    {item}
                                </Link>
                            </li>
                        );
                    })} */}
                    <li key="1">
                        <LinkR
                            className="navlink"
                            to="/"
                            onClick={() => {
                                scroll.scrollToTop();
                                setBurger(!burger);
                            }}
                        >
                            Home
                        </LinkR>
                    </li>
                    <li></li>
                    <li>
                        <Link
                            to="/menu"
                            className="navlink"
                            onClick={() => {
                                scroll.scrollToTop();
                                setBurger(!burger);
                            }}
                        >
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/reservation"
                            className="navlink"
                            onClick={() => {
                                scroll.scrollToTop();
                                setBurger(!burger);
                            }}
                        >
                            Reservation
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/health"
                            className="navlink"
                            onClick={() => {
                                scroll.scrollToTop();
                                setBurger(!burger);
                            }}
                        >
                            COVID-19
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            to="/team"
                            className="navlink"
                            onClick={() => {
                                setBurger(!burger);
                            }}
                        >
                            Team
                        </Link>
                    </li> */}
                    <li key="15">
                        <LinkR
                            className="navlink"
                            to="/"
                            onClick={() => {
                                scroll.scrollToBottom();
                                setBurger(!burger);
                            }}
                        >
                            Contact
                        </LinkR>
                    </li>
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="navbar">
    //         <div
    //             className="logo"
    //             onClick={() => {
    //                 scroll.scrollToTop();
    //             }}
    //             style={{ cursor: "pointer" }}
    //         >
    //             Chai
    //         </div>

    //         {burger ? (
    //             <MdClear
    //                 className="mobile"
    //                 onClick={() => {
    //                     setBurger(!burger);
    //                 }}
    //             />
    //         ) : (
    //             <MdSort
    //                 className="mobile"
    //                 onClick={() => {
    //                     setBurger(!burger);
    //                 }}
    //             />
    //         )}

    //         <div className={!burger ? "nav" : "nav sidebar"}>
    //             <ul>
    //                 <li key="1">
    //                     <LinkR
    //                         to="/"
    //                         onClick={() => {
    //                             scroll.scrollToTop();
    //                         }}
    //                     >
    //                         Home
    //                     </LinkR>
    //                 </li>
    //                 <li key="12">
    //                     <LinkR to="/menu">Menu</LinkR>
    //                 </li>
    //                 <li key="13">
    //                     <LinkR to="/reservation">Reservation</LinkR>
    //                 </li>
    //                 <li key="14">
    //                     <LinkR to="/about-us">About us</LinkR>
    //                 </li>
    //                 <li key="15">
    //                     <LinkR
    //                         to="/"
    //                         onClick={() => {
    //                             scroll.scrollToBottom();
    //                         }}
    //                     >
    //                         Contact
    //                     </LinkR>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // );
};

export default Navbar;
