import React from "react";
import { GiCook, GiBeet, GiBookPile, GiClockwork } from "react-icons/gi";
import "./Services.css";
const Services = () => {
    return (
        <div className="services">
            <div className="services-container">
                <div className="each-service-container">
                    <GiClockwork className="service-icon" />
                    <p style={{ marginBottom: "10px", fontWeight: "800" }}>
                        FAST DELIVERY
                    </p>
                    <p
                        className="service-control"
                        style={{ fontSize: "0.85rem", textAlign: "center" }}
                    >
                        Everything you order at craving will be quickly
                        delivered to your door.
                    </p>
                </div>
                <div className="each-service-container">
                    <GiCook className="service-icon" />
                    <p style={{ marginBottom: "10px", fontWeight: "800" }}>
                        EXPERIENCED CHEFS
                    </p>
                    <p
                        className="service-control"
                        style={{ fontSize: "0.85rem", textAlign: "center" }}
                    >
                        Our staff consist of chefs and cooks with years of
                        experience.
                    </p>
                </div>
                <div className="each-service-container">
                    <GiBeet className="service-icon" />
                    <p style={{ marginBottom: "10px", fontWeight: "800" }}>
                        FRESH FOOD
                    </p>
                    <p
                        className="service-control"
                        style={{ fontSize: "0.85rem", textAlign: "center" }}
                    >
                        We use only the best ingredients to cook tasty fresh
                        food for you.
                    </p>
                </div>
                <div className="each-service-container">
                    <GiBookPile className="service-icon" />
                    <p style={{ marginBottom: "10px", fontWeight: "800" }}>
                        A VARIETY OF DISHES
                    </p>
                    <p
                        className="service-control"
                        style={{ fontSize: "0.85rem", textAlign: "center" }}
                    >
                        In our menu you'll find a wide variety of dishes,
                        desserts, and drinks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
