import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { CHANGE_PASSWORD } from '../../graphql/mutations';
import { CURRENT_USER, IS_LOGGED_IN } from '../../graphql/queries';
import WTLogo from '../../wt-logo.png';
import { Link, useHistory } from 'react-router-dom';

export default () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  
  const { data, loading, error } = useQuery(CURRENT_USER);
  if (loading) return <h1> Loading...</h1>
  if (error) return <h1> Error </h1>
  if (!data) return <h1> No user found </h1>
  const user = data.me

  let history = useHistory();

  const [changePassword, {loading: mutationloading, error: mutationerror}] = useMutation(
    CHANGE_PASSWORD,
    {
      variables: { oldPassword, newPassword },
      onError() { setErrorMessage('Something went wrong');},
      // update(cache, { data: { changePassword }}) {
      //   if (!changePassword) setErrorMessage('Invalid Credentials')
      //   const data = cache.readQuery({ query: CURRENT_USER })
      //   console.log(data)
      //   const me = Object.assign({}, data.me)
      //   cache.writeQuery( { query: CURRENT_USER, data: { me: me }});
      // },
      refetchQueries: [{ query: IS_LOGGED_IN }, { query: CURRENT_USER }]
    }
  )


  return (
    <main className="pwd-chg-main">
      <div className="pwd-acct-info">
        <img src={WTLogo} alt="profile-logo" />
        <p>{user.name}</p>
        <Link to="/me" className="pwd-acct-link">Account Profile</Link>
      </div>
      <form className="pwd-chg-form" onSubmit={(e) => {
        e.preventDefault();
        changePassword();
        history.push("/");
      }}>
        <h1>Password</h1>
        <section className="pwd-chg-input-section">
          <div className="pwd-chg-old-new-pwd">
            <label htmlFor="old-pwd">Current Password</label>
            <br/>
            <input
              id="old-pwd"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.currentTarget.value)}
              placeholder="Current Password"
              className="pwd-input"
              required
            />
          </div>
          <div className="pwd-chg-old-new-pwd">
            <label htmlFor="new-pwd">New Password</label>
            <br/>
            <input
              id="new-pwd"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.currentTarget.value)}
              placeholder="New Password"
              className="pwd-input"
              required
            />
          </div>
        </section>
        <button type="submit" className="pwd-update-btn">UPDATE PASSWORD</button>
      <Link to="/" className="pwd-chg-cancel">CANCEL</Link>
      </form>
    </main>
  )
}
