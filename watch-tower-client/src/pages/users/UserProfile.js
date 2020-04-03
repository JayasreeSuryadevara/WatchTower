import React from './node_modules/react';
import UserDetails from '../../components/users/UserDetails';
import { useApolloClient } from './node_modules/@apollo/react-hooks';

export default () => {
    const client = useApolloClient();

    return (
        <div className="user-profile-main">
            <UserDetails />
            <button onClick={() => client.resetStore()}> Log Out </button>
        </div>
    )
}