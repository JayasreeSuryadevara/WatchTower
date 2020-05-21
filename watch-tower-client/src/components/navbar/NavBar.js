import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navBar/NavBar.css';
import '../../styles/navBar/DropDownAcc.css';
import AuthComp from '../util/AuthComponent';
import ProtectedComp from '../util/ProtectedComponent';
import LogInButton from '../session/LogInButton';
import LogOutButton from '../session/LogOutButton';
import NavBarLogo from './wt-header2.png';
import AccDropDown from './AccDropDown';
import DropDownMenu from '../dropdown/DropDownMenu';

export default () => {

    return (
        <main className="nav-bar-main">
            <section className="nav-bar-container">
                <div className="nav-bar-logo">
                    <div className="drop-down-menu-icon">
                        <i className="fas fa-bars"></i>&nbsp;&nbsp;
                        <DropDownMenu />
                    </div>
                    <Link to={`/`}>
                        <img src={NavBarLogo} alt="navlogo"/>
                    </Link>
                </div>
                <div className="nav-bar-news-links" media="screen and (max-width: 600px)">
                    <Link to="/latest"><p>Latest</p></Link>
                    <Link to="/watchlist"><p>Watchlist</p></Link>
                    <Link to="/technology"><p>Techology</p></Link>
                    <Link to="/markets"><p>Markets</p></Link>
                    <Link to="/investing"><p>Investing</p></Link>
                </div>
                <div className="nav-bar-session-links">
                    <div>
                        <ProtectedComp component={LogOutButton} />
                        <AuthComp component={LogInButton} />
                    </div>
                    <AccDropDown/>
                </div>
                <div>
                    <Link to="/search">
                        <i className="fas fa-search"></i>
                    </Link>
                </div>
            </section>
        </main>
    );
};