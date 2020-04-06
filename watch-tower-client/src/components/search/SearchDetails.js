import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/search/SearchBar.css';

const SearchDetails = (props) => {

    let [searchList, setSearchList] = useState([]);

    const handleInputChange = (e) => {
        let currentList = [];

        // If search bar is not empty return all items from 
        // the current list which include search string
        if (e.target.value !== "") {
            currentList = props.list;

            searchList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            setSearchList(props.list);
        }
        // Set the filtered state based on what our rules added to newList
        setSearchList(searchList)

    }

    const getLink = (listItem) => {
        const searchStrWords = listItem.split(" ");
        let route = ""
        route = searchStrWords.map(word => {
            return route += "/" + word.toLowerCase();
        })
        return <Link to={route[1]} >{listItem.toString()}</Link>;
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
                        {searchList.map(item => (
                            <li key={item._id}>
                                {getLink(item)}
                            </li>
                        ))}
                    </ul>
                </>
            </div>
        </div>
    );

}

export default SearchDetails;