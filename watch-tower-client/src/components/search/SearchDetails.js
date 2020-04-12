import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/search/SearchBar.css';

const SearchDetails = () => {

    const tickers = [
        "AMZN",
        "EBAY",
        "AAPL",
        "GOOGL",
        "MSFT",
        "AMD",
        "FB",
        "PYPL",
        "CSCO",
        "INTC",
        "DAL",
        "HPE",
        "KLAC",
        "NVDA",
        "NFLX",
        "ORCL",
        "QCLM",
        "TXN",
        "IBM",
        "ROKU",
        "MMM",
        "GE",
        "XRX",
        "BAC",
        "AXP",
        "CAT",
        "PG",
        "KO",
        "JNJ",
        "C",
        "ABT",
        "T",
        "VZ",
        "CLX",
        "PFE",
        "JPM",
        "WFC",
        "HRL",
        "GM",
        "SBUX",
        "KMTUY"
    ]
    let [searchList, setSearchList] = useState([]);

    const handleInputChange = (e) => {
        let currentList = [];

        console.log("test")
        // If search bar is not empty return all items from 
        // the current list which include search string
        if (e.target.value !== "") {
            currentList = tickers;

            searchList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
            console.log("searchList", searchList)
        } else {
            // If the search bar is empty, set newList to original tickers list
            setSearchList(tickers);
        }
        // Set the filtered state based on what our rules added to newList
        setSearchList(searchList)

    }

    // const getLink = (listItem) => {
    //     const searchStrWords = listItem.split(" ");
    //     let route = ""
    //     route = searchStrWords.map(word => {
    //         return route += "/" + word.toLowerCase();
    //     })
    //     return <Link to={route[1]} >{listItem.toString()}</Link>;
    // }

    return (
        <div className="search-bar-main">
            <div className="search-close-div">
                <Link to="/" className="search-close"> 
                    <i className="far fa-window-close fa-3x"></i> 
                </Link>
            </div>
            <div className="search-bar-1">
                <div className="search-bar-2">
                    <input
                        type="text"
                        className="search-input"
                        onChange={handleInputChange}
                        placeholder="Enter a symbol or keyword"
                    />
                    <button className="seach-icon">
                        <i className="fas fa-search fa-2x"></i>
                    </button>
                </div>
                <br />
                <br />
                <>
                    <p className="search-listings">Listings</p>
                    <ul className="search-link-list">
                        {searchList.map((item,i) => (
                            <li key={i}>
                                {item.toString()}
                                {/* {getLink(item)} */}
                            </li>
                        ))}
                    </ul>
                </>
            </div>
        </div>
    );

}

export default SearchDetails;