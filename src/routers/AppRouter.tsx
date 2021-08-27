import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import HomeScreen from "../screens/homeScreen";
import UsersPaymentScheduleScreen from "../screens/usersPaymentScheduleScreen";

export default function AppRouter() {
  return (
    <Router>
      <div>
          <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/users_payments">
            <UsersPaymentScheduleScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
