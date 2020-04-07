import React from 'react';
import { REMOVE_WATCH_LIST_ITEM } from '../../graphql/mutations';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';

export default ({ watchListItem }) => {
  const {data, loading, error} = useQuery(CURRENT_USER);

  const [removeWatchListItem, {loading: mutationloading, error: mutationerror}] = useMutation(
    REMOVE_WATCH_LIST_ITEM,
    {
      variables: {watchListItemId: watchListItem._id},
      onError() {},
      update(cache){
        const me = Object.assign({}, data.me);
        me.watchList = me.watchList.filter(listItem => listItem._id !== watchListItem._id);
        cache.writeQuery( { query: CURRENT_USER, data: {me: me}});
      },
      // refetchQueries: [ {query: CURRENT_USER}]
    }
  )

  return (
    <>
      <button onClick={removeWatchListItem} disabled={mutationloading}>
        Remove ^
      </button>
    </>
  )
}