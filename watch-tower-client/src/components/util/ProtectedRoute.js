import React from 'react';
import { IS_LOGGED_IN } from '../../graphql/queries';
import { Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';


export default ({ component: Component, path }) => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);

  if (loading) return <h1> Loading...</h1>
  if (error) return <h1> Error </h1>
  if (!data.isLoggedIn) {
    return (
      <Route path={path} component={Component} />
    )
  } else {
    return (
      <Redirect to="/" />
    )
  }
};