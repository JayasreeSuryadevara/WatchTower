import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';
import { useApolloClient } from '@apollo/react-hooks';

const AccDropLogged = () => {
  const client = useApolloClient();
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
    <section className="acc-drop-down">
      <div className="acc-drop-down-header">
        {user.name}
      </div>
      <div className="acc-drop-down-choices">
        <Link to="/me" className="acc-drop-down-choice-button">Profile</Link>
        <Link to="/watchlist"><p className="acc-drop-down-choice-button"> Watch List</p></Link>
        {/* <p className="acc-drop-down-choice-button"> Email & Alerts</p>
        <p className="acc-drop-down-choice-button"> Games</p> */}
      </div>
      <div className="acc-drop-down-logout">
        <button onClick={() => { client.resetStore() }}>Log Out</button>
      </div>
      
    </section>
  )
}
export default AccDropLogged;