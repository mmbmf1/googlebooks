import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <label>Search:
                    <input placeholder='Search Term' value=''></input>
                    <button>Search</button>
                </label>
                <label>Print Type:
                    <select>
                        <option></option>
                    </select>
                </label>
                <label>Book Type:
                    <select>
                        <option></option>
                    </select>
                </label>
            </div>
        )
    }
}

export default SearchBar;