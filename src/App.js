import { useState, useEffect } from "react";
// importing external modules
import { BrowserRouter as Router, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
// importing components
import NavBar from "./components/Navbar/Navbar";
import Reservation from "./components/Reservation/Reservation";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import HealthPage from "./components/Health/HealthPage";
import Top from "./components/Navbar/Top";
// css
import "./App.css";
import About from "./components/About/About";

function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="App-c">
            {!loading ? (
                <div className="App">
                    <Router>
                        <NavBar />
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/reservation">
                            <Reservation />
                        </Route>
                        <Route path="/aboutus">
                            <About />
                        </Route>
                        <Route path="/menu" component={Menu}></Route>
                        <Route path="/health" component={HealthPage} />

                        <Footer />
                        {/* <Top /> */}
                    </Router>
                </div>
            ) : (
                <div className="c">
                    <div className="loader">
                        <HashLoader color={"fff"} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
