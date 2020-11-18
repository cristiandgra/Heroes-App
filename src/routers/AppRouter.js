import React, { useContext } from "react";
import { PublicRoute } from "./PublicRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router basename="/Heroes-App">
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
