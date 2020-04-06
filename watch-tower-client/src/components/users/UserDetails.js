import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from '../../graphql/queries';
import { Link } from 'react-router-dom';


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
            <header className="profile-header">
                <h1>Welcome, {user.name}</h1>
            </header>
            <section className="profile-body">
                <div className="profile-body-left"></div>
                <div className="profile-body-middle">
                    <h1 className="profile-details">My Account Overview</h1>
                    <div className="profile-details">
                        <p className="detail-header">EMAIL ADDRESS</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="profile-details profile-flex">
                        <p className="detail-header">PASSWORD</p>
                        <Link to="/password">
                            <p className="detail-info">Change Password <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></p>
                        </Link>
                    </div>
                    <div className="profile-details profile-flex">
                        <p className="detail-header">WATCHLIST</p>
                        <Link to="/watchlist">
                        <p className="detail-info">View My Watchlist <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></p>
                        </Link>
                    </div>
                </div>
                <div className="profile-body-right"></div>
            </section>
        </div>
    )
}
export default UserDetails;