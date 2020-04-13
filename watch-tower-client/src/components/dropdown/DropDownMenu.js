import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navBar/NavBar.css';

export default () => {

    return (
        <main className="drop-down-main">
            <ul className="drop-down-links">
                <li className="link-item">
                    <Link to='/'> Home </Link>
                </li>
                <li className="link-item">
                    <Link to='/news' > Latest News</Link>
                </li>
                <li className="link-item">
                    <Link to='/watchlist' >Watchlist</Link>
                </li>
                <li className="link-item">
                    <Link to='/technology' > Techology</Link>
                </li>
                <li className="link-item">
                    <Link to='/markets' > Markets</Link>
                </li>
                <li className="link-item">
                    <Link to='/investing' > Investing</Link>
                </li>
                <li className="link-item">
                    <Link to='/creators'>Created By</Link>
                </li>
            </ul>
        </main>
    );
};