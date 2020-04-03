import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navBar/NavBar.css';

export default () => {

    return (
        <main className="nav-bar-main">
            <section className="nav-bar-container">
                <div className="nav-bar-logo">
                    <i className="fas fa-bars"></i>&nbsp;&nbsp;
                <Link to={`/`}>
                    HomePage
                </Link>
                </div>
                <div className="nav-bar-news-links">
                    <p>Latest</p>
                    <p>Watchlist</p>
                    <p>Techology</p>
                    <p>Investing</p>
                </div>
                <div className="nav-bar-session-links">
                    <Link to={`/login`}>
                        Login
                    </Link>
                    <Link to={`/signup`}>
                        Signup
                    </Link>
                    <Link to={"/me"}>
                        <i className="far fa-user-circle"></i>
                    </Link>
                </div>
                <div>
                    <p><i className="fas fa-search"></i></p>
                </div>
            </section>
        </main>
    );
};