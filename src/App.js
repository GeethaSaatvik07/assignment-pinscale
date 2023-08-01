import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/assignment-pinscale/login" component={Login} />
    <ProtectedRoute exact path="/assignment-pinscale/" component={Dashboard} />
    <ProtectedRoute
      exact
      path="/assignment-pinscale/transactions"
      component={Transactions}
    />
    <ProtectedRoute
      exact
      path="/assignment-pinscale/profile"
      component={Profile}
    />
  </Switch>
);

export default App;
