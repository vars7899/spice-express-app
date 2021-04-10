import React from "react";
import MenuData from "./MenuData";
import "./Menu.css";
const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-container">
                <div className="menu-content starter">
                    <p
                        className="medium-text"
                        style={{
                            margin: "40px 0",
                            padding: "10px 0",
                            letterSpacing: "2px",
                            width: "100%",
                            borderBottom: "1px #fff solid",
                            borderTop: "1px #fff solid",
                            textAlign: "center",
                            textTransform: "uppercase",
                        }}
                    >
                        Starters
                    </p>
                    {MenuData.starterItems.map((item) => (
                        <div key={item.id} className="menu-item-container ">
                            <div className="menu-item-heading menu-flex">
                                <p className="small-text">{item.name}</p>
                                <p className="">{item.cost}</p>
                            </div>
                            <p className=" light menu-adjust">{item.desc}</p>
                            <br />
                        </div>
                    ))}
                </div>
                <div className="menu-content main-course">
                    <p
                        className="medium-text"
                        style={{
                            margin: "40px 0",
                            padding: "10px 0",
                            letterSpacing: "2px",
                            width: "100%",
                            borderBottom: "1px #fff solid",
                            borderTop: "1px #fff solid",
                            textAlign: "center",
                            textTransform: "uppercase",
                        }}
                    >
                        Main courses
                    </p>
                    {MenuData.mainCourseItems.map((item) => (
                        <div key={item.id} className="menu-item-container ">
                            <div className="menu-item-heading menu-flex">
                                <p className="small-text">{item.name}</p>
                                <p className="">{item.cost}</p>
                            </div>
                            <p className=" light menu-adjust">{item.desc}</p>
                            <br />
                        </div>
                    ))}
                </div>
                <div className="menu-content dessert">
                    <p
                        className="medium-text"
                        style={{
                            margin: "40px 0",
                            padding: "10px 0",
                            letterSpacing: "2px",
                            width: "100%",
                            borderBottom: "1px #fff solid",
                            borderTop: "1px #fff solid",
                            textAlign: "center",
                            textTransform: "uppercase",
                        }}
                    >
                        Desserts
                    </p>
                    {MenuData.dessertItems.map((item) => (
                        <div key={item.id} className="menu-item-container ">
                            <div className="menu-item-heading menu-flex">
                                <p className="small-text">{item.name}</p>
                                <p className="">{item.cost}</p>
                            </div>
                            <p className=" light menu-adjust">{item.desc}</p>
                            <br />
                        </div>
                    ))}
                </div>
                <div className="menu-content drinks">
                    <p
                        className="medium-text"
                        style={{
                            margin: "40px 0",
                            padding: "10px 0",
                            letterSpacing: "2px",
                            width: "100%",
                            borderBottom: "1px #fff solid",
                            borderTop: "1px #fff solid",
                            textAlign: "center",
                            textTransform: "uppercase",
                        }}
                    >
                        Drink Menu
                    </p>
                    {MenuData.drinkItems.map((item) => (
                        <div key={item.id} className="menu-item-container ">
                            <div className="menu-item-heading menu-flex">
                                <p className="small-text">{item.name}</p>
                                <p className="">{item.cost}</p>
                            </div>
                            <p className=" light menu-adjust">{item.desc}</p>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
