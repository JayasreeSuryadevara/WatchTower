import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UPDATE_WATCH_LIST_ITEM } from '../../graphql/mutations';
import { CURRENT_USER } from '../../graphql/queries';

export default ({ watchListItem }) => {
  const [noOfShares, setNoOfShares] = useState(1)

  // const { data, loading, error } = useQuery(CURRENT_USER);
  const [updateWatchListItem, { loading: mutationloading, error: mutationerror }] = useMutation (
    UPDATE_WATCH_LIST_ITEM,
    {
      variables: {newNoOfShares: noOfShares, watchListItemId: watchListItem._id},
      onError() {},
      refetchQueries: [ {query: CURRENT_USER}]
    }
  )
  return (
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
      />
    </form>
  );
}
