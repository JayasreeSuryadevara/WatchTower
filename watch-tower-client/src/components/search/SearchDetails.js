import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { ALL_STOCKS } from '../../graphql/queries';
import SearchListItem from './SearchListItem';
import '../../styles/search/SearchBar.css';

const SearchDetails = () => {
    
    let [searchList, setSearchList] = useState([]);
    let tickers = [];
    const { data, loading, error } = useQuery(ALL_STOCKS);
    if (loading || error) return <p> Finding what you want!! </p>
    if (data.stocks) {
        tickers = data.stocks.map(stock => {
            return stock.ticker
        })
    }


    const handleInputChange = (e) => {
        let currentList = [];

        // If search bar is not empty return all items from 
        // the current list which include search string
        if (e.target.value !== "") {
            currentList = tickers;

            searchList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original tickers list
            setSearchList(tickers);
        }
        // Set the filtered state based on what our rules added to newList
        setSearchList(searchList)

    }


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
                                <SearchListItem ticker={item}/>
                            </li>
                        ))}
                    </ul>
                </>
            </div>
        </div>
    );

}

export default SearchDetails;