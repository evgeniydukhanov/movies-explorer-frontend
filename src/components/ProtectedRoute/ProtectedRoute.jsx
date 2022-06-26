import { useContext } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/store';

function ProtectedRoute({ component: Component, path }) {
  const { userState } = useContext(CurrentUserContext);
  if (!userState.loggedIn) {
    return <Redirect to='/' />;
  }
  // const history = useHistory();
  return (
    <Route path={path}>
      {/* {() => (userState.loggedIn ? <Component /> : history.push('/'))} */}
      <Component />
    </Route>
  );
}

export default ProtectedRoute;
