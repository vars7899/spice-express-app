import React from "react";
import Mygif3 from "../../video/mygif3.gif";
import Mygif4 from "../../video/mygif4.gif";
import Mygif5 from "../../video/mygif5.gif";
import Mygif6 from "../../video/mygif6.gif";
import Mygif7 from "../../video/mygif7.gif";
import "./Recipes.css";
const Recipes = () => {
    return (
        <div className="recipes">
            <div className="recipes-container">
                <div className="r1">
                    <div className="recipes-box-1">
                        <img
                            className="my-gif-3"
                            src={Mygif3}
                            alt="...connecting"
                        />
                        <div className="recipes-box-1-c">
                            <p className="large-text ">Lorem,</p>
                            <p className="xs light control-x">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ut consectetur facilis
                                distinctio quasi reprehenderit architecto
                                expedita praesentium laboriosam! Inventore
                                doloribus porro culpa voluptatem excepturi
                                similique aliquid provident sapiente laudantium
                                dolores!
                            </p>
                        </div>
                    </div>
                    <div className="recipes-box-2">
                        <div className="recipes-box-1-c">
                            <p className="large-text control-x">Lorem,ert</p>
                            <p className="xs light control-x">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Odio exercitationem vero totam
                                perferendis. Distinctio natus placeat rem, sunt,
                                optio necessitatibus vero expedita nam nulla,
                                ipsa voluptatum iste praesentium quis in?
                            </p>
                        </div>
                        <img
                            className="my-gif-4"
                            src={Mygif4}
                            alt="...connecting"
                        />
                    </div>
                </div>

                <div className="r2">
                    <div className="recipes-box-1">
                        <img
                            className="my-gif-3"
                            src={Mygif5}
                            alt="...connecting"
                        />
                        <div className="recipes-box-1-c">
                            <p className="large-text ">Lorem,</p>
                            <p className="xs light control-x">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ut consectetur facilis
                                distinctio quasi reprehenderit architecto
                                expedita praesentium laboriosam! Inventore
                                doloribus porro culpa voluptatem excepturi
                                similique aliquid provident sapiente laudantium
                                dolores!
                            </p>
                        </div>
                    </div>
                    <div className="recipes-box-2">
                        <div className="recipes-box-1-c">
                            <p className="large-text ">Lorem, </p>
                            <p className="xs light control-x">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Odio exercitationem vero totam
                                perferendis. Distinctio natus placeat rem, sunt,
                                optio necessitatibus vero expedita nam nulla,
                                ipsa voluptatum iste praesentium quis in?
                            </p>
                        </div>
                        <img
                            className="my-gif-4"
                            src={Mygif7}
                            alt="...connecting"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
