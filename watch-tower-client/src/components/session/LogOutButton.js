import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

export default () => {
  const client = useApolloClient();
  return (
    <button onClick={() => { client.resetStore() }} className="log-in-out-button">Log Out</button>
  )
};