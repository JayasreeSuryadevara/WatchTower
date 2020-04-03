import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default () => {

    return (
        <div className="navbar">
            <Link to={`/`}>
                HomePage
            </Link>
            <Link to={`/login`}>
                Login
            </Link>
            <Link to={`/signup`}>
                Signup
            </Link>
            <Link to={"/me"}>
                Profile
            </Link>
        </div>
    );
};