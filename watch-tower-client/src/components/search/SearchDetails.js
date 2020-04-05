import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SearchDetails = () => {

    state = {
        searchQuery: ''
    }

    closeSearchPage = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    handleChange = (e) => {
        let currentList = [];
        let newList = [];

        // If search bar is not empty return all items from 
        // the current list which include search string
        if (e.target.value !== "") {
            currentList = this.props.list;

            newList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.props.list;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });
    }

    getLink = (listItem) => {
        const searchStrWords = listItem.split(" ");
        let route = ""
        route = searchStrWords.map(word => {
            return route += "/" + word.toLowerCase();
        })
        return <Link to={route[1]} >{listItem.toString()}</Link>;
    }

    return (
        <div className="search-bar-main">
            <div className="search-bar-1">
                <input
                    type="text"
                    className="search-input"
                    onChange={handleChange}
                    placeholder="Search..."
                />
                <button
                    className="search-close"
                    onClick={closeSearchPage}
                > <i className="far fa-window-close fa-2x"></i> </button>
            </div>
            <br />
            <br />
            <ul className="search-link-list">
                {state.filtered.map(item => (
                    <li key={item}>
                        {/* {item} */}
                        {getLink(item)} &nbsp;
                    </li>
                ))}
            </ul>
        </div>
    );


}

export default withRouter(SearchDetails);