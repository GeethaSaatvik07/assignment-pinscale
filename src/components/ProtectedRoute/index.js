import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const token = Cookies.get("user_id");
  if (token === undefined) {
    return <Redirect to="/assignment-pinscale/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
