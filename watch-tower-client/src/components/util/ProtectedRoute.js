import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from '../../graphql/queries';

export default ({
  component: Component,
  path,
  exact,
  redirectTo
}) => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);

  if (!redirectTo) redirectTo = "/login";

  if (loading || error || !data) {
    return null;
  } else if (data.isLoggedIn) {
    return <Route path={path} component={Component} exact={exact} />;
  } else {
    return <Route path={path} render={() => <Redirect to={redirectTo} />} />;
  }
};