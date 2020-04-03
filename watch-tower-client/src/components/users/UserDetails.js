import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';
// import { Link } from 'react-router-dom';
import Logo from '../../wt-logo.png';


export default () => {
    const { data, loading, error } = useQuery(CURRENT_USER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data || !data.me) return <p>Not Found</p>;

    const user = data.me;


    return (
        <div className="user-profile">
            <img src={Logo} alt="logo" height="40" width="40" />
            <h1>{user.name}</h1>

            <div>
                <div>
                    <h2>Account</h2>    
                </div>
                <div>
                    <p> Change Password</p>
                    <p> Watch List </p>
                </div>
            </div>

        </div>
    )

}