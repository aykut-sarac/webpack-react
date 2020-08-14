import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

//Auth
import { AuthContext } from "./auth/AuthAPI";
import AuthRoute from "./AuthRoute";

function App() {
    const currentToken = JSON.parse(localStorage.getItem("token"));
    //console.log(currentToken);
    const [authTokens, setAuthTokens] = useState(
        localStorage.getItem(currentToken) || ""
    );

    const setTokens = (data) => {
        if (data) {
            // user login
            //console.log(data);
            localStorage.setItem("token", JSON.stringify(data));
        } else {
            // user logout
            localStorage.removeItem("token");
        }
        setAuthTokens(data);
    };

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/news" component={News} />
                <Route exact path="/login" component={Login} />
                <AuthRoute exact path="/profile" component={Profile} />
                <Route component={Error} />
            </Switch>
            <Footer />
        </AuthContext.Provider>
    );
}
export default App;
