import React from "react";
import { Route, Redirect } from "react-router-dom";

const RestrictRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!window.localStorage.getItem("_t")) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/myaccount/details" />;
                }
            }}
        />
    );
};
export default RestrictRoute;
