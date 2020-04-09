<<<<<<< HEAD
import React, { useState } from 'react';
import { ADD_WATCH_LIST_ITEM } from '../../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';

export default () => {

  const [ticker, setTicker] = useState("");

  const [addWatchListItem, { loading, error }] = useMutation(
    ADD_WATCH_LIST_ITEM,
    {
      variables: { ticker },
      onError() {},
      refetchQueries: [{ query: CURRENT_USER }]
    },
  )

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        addWatchListItem();
      }}
      className="add-to-watch-list-add-button"
    >
      <input
        type="text"
        placeholder="+ ADD SYMBOL"
        onChange={e => setTicker(e.currentTarget.value)}
      />
      <i className="fas fa-search"></i>
    </form>
  )
=======
import React from 'react';
import { ADD_WATCH_LIST_ITEM } from '../../graphql/mutations';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';

export default ( { stock }) => {

  return null;
>>>>>>> 914f413840f163009c44f788e0bac1069bf3cfbd
}