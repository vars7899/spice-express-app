import React from "react";

const HealthPage = () => {
    return (
        <div className="health-page">
            <div className="health-page-container">
                <p className="large-text" style={{ marginBottom: "20px" }}>
                    Health & Safety Measures
                </p>
                <p style={{ marginBottom: "20px" }} className="medium-text">
                    The safety and well-being of our guests and employees is our
                    #1 priority.
                </p>
                <p className="medium-text">
                    As such, we are following government guidelines and taking
                    additional measures to keep you safe. Stringent protocols
                    have been implemented in our restaurant outlined below:
                </p>
                <ul className="health-list medium-text">
                    <li>
                        All dine-in guests will be offered hand sanitizer prior
                        to entering.
                    </li>
                    <li>
                        Hand sanitizer stations are available throughout the
                        restaurant for guest use.
                    </li>
                    <li>
                        All guest table surfaces will be disinfected thoroughly
                        between use.
                    </li>
                    <li>
                        Stringent hygiene protocol training has been implemented
                        for all employees.
                    </li>
                    <li>
                        All employees will be wearing PPE and following strict
                        hygiene protocol within the restaurant at all times.
                    </li>
                    <li>We are only accepting electronic payments.</li>
                    <li>
                        In common spaces such as waiting areas, guests are asked
                        to maintain a physical distance of 6 feet between them
                        and other restaurant guests.
                    </li>
                    <li>
                        Groups will be seated six feet apart or with a physical
                        barrier between tables.
                    </li>
                    <li>
                        A maximum of 6 people will be sat per table. We are
                        currently unable to accommodate large parties at
                        separate tables.
                    </li>
                    <li>Washrooms will be sanitized every 15 minutes.</li>
                    <li>
                        Menus are available on our website. Single-use menus are
                        also available.{" "}
                    </li>
                    <li>
                        Operating at a reduced capacity and/or in accordance
                        with provincial occupancy guidelines.
                    </li>
                </ul>
                <p className="small-text">
                    Any guest exhibiting COVID-19 related symptoms will be asked
                    to return when they are well.
                </p>
                <p className="small-text" style={{ marginTop: "30px" }}>
                    Thank you for your support and trust in us.
                </p>
            </div>
        </div>
    );
};

export default HealthPage;
