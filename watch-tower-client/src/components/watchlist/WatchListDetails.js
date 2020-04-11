import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';
import WatchListItem from './WatchListItem';
import AddToWatchListBtn from './AddToWatchListBtn';
// import { Link } from 'react-router-dom';

const WatchListDetails = () => {
  const { data, loading, error } = useQuery(
    CURRENT_USER,
    {
      fetchPolicy: 'network-only'
    }
  )

  if (loading) return <h1> Loading...</h1>
  if (error) return <h1> Error </h1>
  if (!data) return <h1> No user found </h1>
  const user = data.me

  return (
    <section className="watch-list-left">
      <div className="add-to-watch-list">
        <h1>Add to watchlist</h1>
        <AddToWatchListBtn/>
      </div>
      <div>
        <ul className="watch-list-items">
          {user.watchList && user.watchList.map(watchListItem => (
            // <Link to={`/ticker/${watchListItem.stock.ticker}`}>
              <WatchListItem watchListItem={watchListItem} key={watchListItem._id}/>
            // </Link>
          ))}
        </ul>
      </div>
      
    </section>
  )
}

export default WatchListDetails;