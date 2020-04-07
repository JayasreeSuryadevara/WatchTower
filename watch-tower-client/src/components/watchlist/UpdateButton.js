import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UPDATE_WATCH_LIST_ITEM } from '../../graphql/mutations';
import { CURRENT_USER } from '../../graphql/queries';

const UpdateButton = ({ watchListItem }) => {
  // const { data, loading, error } = useQuery(CURRENT_USER);
  const [updateWatchListItem, { loading: mutationloading, error: mutationerror }] = useMutation (
    UPDATE_WATCH_LIST_ITEM,
    {
      variables: {newNoOfShares: watchListItem.noOfShares, watchListItemId: watchListItem._id},
      onError() {},
      refetchQueries: [ {query: CURRENT_USER}]
    }
  )
  return (
    <form className="watch-list-add-shares" onSubmit={(e) => {
        e.preventDefault();
        updateWatchListItem();
      }}>
      <input
        value={watchListItem.noOfShares}
        type="number"
        placeholder="+ ADD HOLDINGS"
      />
    </form>
  );
}

export default UpdateButton;