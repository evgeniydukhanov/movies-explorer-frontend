import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/store";

function ProtectedRoute({ children }) {
  const { userState } = useContext(CurrentUserContext);
  return <Route>{userState.loggedIn ? children : <Redirect to="/" />} </Route>;
}

export default ProtectedRoute;
