import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';
// import { Link } from 'react-router-dom';
import Logo from '../../wt-logo.png';


const UserDetails = () => {
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
        <div className="user-profile">
            <img src={Logo} alt="logo" height="40" width="40" />
            <section>
                <h1>Welcome {user.name}</h1>

                <div>
                    <div>
                        <h2>Account</h2>    
                    </div>
                    <div>
                        <p> Change Password</p>
                        <p> Watch List </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UserDetails;