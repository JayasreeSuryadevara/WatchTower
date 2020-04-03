import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navBar/NavBar.css';
import '../../styles/navBar/DropDownAcc.css';
import AuthComp from '../util/AuthComponent';
import ProtectedComp from '../util/ProtectedComponent';
import LogInButton from '../session/LogInButton'
import LogOutButton from '../session/LogOutButton'
import NavBarLogo from './wt-header2.png'
import AccDropDown from './AccDropDown'

export default () => {

    return (
        <main className="nav-bar-main">
            <section className="nav-bar-container">
                <div className="nav-bar-logo">
                    <i className="fas fa-bars"></i>&nbsp;&nbsp;
                <Link to={`/`}>
                    {/* HomePage */}
                    <img src={NavBarLogo} alt="navlogo"/>
                </Link>
                </div>
                <div className="nav-bar-news-links">
                    <p>Latest</p>
                    <p>Watchlist</p>
                    <p>Techology</p>
                    <p>Markets</p>
                    <p>Investing</p>
                </div>
                <div className="nav-bar-session-links">
                    <div>
                        <ProtectedComp component={LogOutButton} />
                        <AuthComp component={LogInButton} />
                    </div>
                    {/* <Link to="/me">
                        <i className="far fa-user-circle"></i>
                    </Link> */}
                    <AccDropDown/>
                </div>
                <div>
                    <p><i className="fas fa-search"></i></p>
                </div>
            </section>
        </main>
    );
};