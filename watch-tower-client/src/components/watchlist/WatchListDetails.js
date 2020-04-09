import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';
import WatchListItem from './WatchListItem';
import AddToWatchListBtn from './AddToWatchListBtn';

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
      <div className="watch-list-items">


        {/* From -------remove this part when we have queries in place */}
        <li className="watch-list-item-indiv">
          <section className="indiv-main">
            <div className="indiv-main-top">
              <div className="watch-list-item-co-info">
                <p className="watch-list-ticker">TICKR</p>
                <p className="watch-list-co-name">Company Inc.</p>
              </div>
              <div className="watch-list-add-shares">
                <input
                  value=""
                  type="number"
                  placeholder="+ ADD HOLDINGS"
                  className="add-shares-input"
                />
              </div>
            </div>
            <div className="watch-list-item-data">
              <div className="watch-list-item-chg">
                <p>LAST</p>
                <p>CHG</p>
                <p>%CHG</p>
              </div>
              <div className="watch-list-item-vol">
                <p>VOLUME</p>
                <p>AVG VOL</p>
              </div>
              <div className="watch-list-item-range">DAY RANGE</div>
            </div>
          </section>
          <section className="watch-list-remove">
            <button>Remove ^</button>
          </section>
        </li>
        {/* To -------remove this part when we have queries in place */}


        <ul>
          {user.watchList && user.watchList.map(watchListItem => (
            <WatchListItem />
          ))}
        </ul>
      </div>
      
    </section>
  )
}

export default WatchListDetails;