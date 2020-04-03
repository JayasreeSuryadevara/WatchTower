import React from 'react';
import { Link } from 'react-router-dom';
import NameLogo from '../../wt-header.png';
import './NavBar.css';

export default () => {

    return (
        <div className="navbar">
            <img src={NameLogo} className="app-name" alt="AppName"/>
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