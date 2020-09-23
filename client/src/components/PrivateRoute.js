import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, ...rest }) => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  if (isAuthenticated === false) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      path={path}
      render={(props) => (
        <Component
          //inside props react-router-dom stuff
          {...props}
          //inside rest any props passed like the name that we passed to admin
          {...rest}
        />
      )}
    />
  );
};

export default PrivateRoute;