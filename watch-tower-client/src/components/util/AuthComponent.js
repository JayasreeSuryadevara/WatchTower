import React from 'react';
import { IS_LOGGED_IN } from '../../graphql/queries';
import { useQuery } from '@apollo/react-hooks';

export default ({ component: Component, ...otherProps }) => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);

  if (loading || error || !data) {
    return null;
  } else if (!data.isLoggedIn) {
    return (
      <Component {...otherProps} />
    );
  } else {
    return null;
  }
}