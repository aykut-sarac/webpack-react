import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth/AuthAPI";

export default function Profile ({ component: Component, ...rest }) {
    const { authTokens } = useAuth();
    return (
        <Route
            {...rest}
            render={(props) =>
                authTokens ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
}
