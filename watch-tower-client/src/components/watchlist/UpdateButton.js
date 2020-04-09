<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 914f413840f163009c44f788e0bac1069bf3cfbd
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UPDATE_WATCH_LIST_ITEM } from '../../graphql/mutations';
import { CURRENT_USER } from '../../graphql/queries';

<<<<<<< HEAD
export default ({ watchListItem }) => {
  const [noOfShares, setNoOfShares] = useState(1)

=======
const UpdateButton = ({ watchListItem }) => {
>>>>>>> 914f413840f163009c44f788e0bac1069bf3cfbd
  // const { data, loading, error } = useQuery(CURRENT_USER);
  const [updateWatchListItem, { loading: mutationloading, error: mutationerror }] = useMutation (
    UPDATE_WATCH_LIST_ITEM,
    {
<<<<<<< HEAD
      variables: {newNoOfShares: noOfShares, watchListItemId: watchListItem._id},
=======
      variables: {newNoOfShares: watchListItem.noOfShares, watchListItemId: watchListItem._id},
>>>>>>> 914f413840f163009c44f788e0bac1069bf3cfbd
      onError() {},
      refetchQueries: [ {query: CURRENT_USER}]
    }
  )
  return (
<<<<<<< HEAD
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        updateWatchListItem();
      }}
      className="watch-list-add-shares"
      >
      <input
        type="number"
        placeholder="+ ADD HOLDINGS"
        onChange={e => setNoOfShares(e.currentTarget.value)}
=======
    <form className="watch-list-add-shares" onSubmit={(e) => {
        e.preventDefault();
        updateWatchListItem();
      }}>
      <input
        value={watchListItem.noOfShares}
        type="number"
        placeholder="+ ADD HOLDINGS"
>>>>>>> 914f413840f163009c44f788e0bac1069bf3cfbd
      />
    </form>
  );
}
<<<<<<< HEAD
=======

export default UpdateButton;
>>>>>>> 914f413840f163009c44f788e0bac1069bf3cfbd
