import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UPDATE_WATCH_LIST_ITEM } from '../../graphql/mutations';
import { CURRENT_USER } from '../../graphql/queries';

export default ({ watchListItem }) => {
  const [noOfShares, setNoOfShares] = useState(1)

  const [updateWatchListItem, { loading, error }] = useMutation (
    UPDATE_WATCH_LIST_ITEM,
    {
      variables: {newNoOfShares: parseInt(noOfShares), watchListItemId: watchListItem._id},
      onError() {},
      refetchQueries: [{ query: CURRENT_USER }]
    }
  )

  function handleUpdate() {
    updateWatchListItem();
    window.location.reload();
  }

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
      className="watch-list-add-shares"
      >
      <input
        type="number"
        placeholder="+/- CHANGE HOLDINGS"
        onChange={e => setNoOfShares(e.currentTarget.value)}
      />
    </form>
  );
}
