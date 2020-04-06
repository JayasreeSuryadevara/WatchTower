import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navBar/NavBar.css';

export default () => {

    return (
        <main className="drop-down-main">
            <ul className="drop-down-links">
                <li className="link-item">
                    <Link to="/"> Home </Link>
                </li>
                <li className="link-item">
                    <Link to="/" > Latest News</Link>
                </li>
                <li className="link-item">
                    <Link to="/watchlist" >Watchlist</Link>
                </li>
                <li className="link-item">
                    <Link to="/" > Techology</Link>
                </li>
                <li className="link-item">
                    <Link to="/" > Markets</Link>
                </li>
                <li className="link-item">
                    <Link to="/" > Investing</Link>
                </li>
            </ul>
        </main>
    );
};