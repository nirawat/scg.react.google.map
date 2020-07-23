import { Route } from "react-router-dom";
import React from "react";
export const PublicRoute = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};
