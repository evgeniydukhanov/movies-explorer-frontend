import { useContext } from "react";
import { Route, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/store";

function ProtectedRoute({ component: Component, path }) {
  const { userState } = useContext(CurrentUserContext);
  const history = useHistory();
  return (
    <Route path={path}>
      {userState.loggedIn ? <Component /> : history.push("/")}
    </Route>
  );
}

export default ProtectedRoute;
