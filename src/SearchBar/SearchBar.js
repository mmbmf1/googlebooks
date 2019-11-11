import React, { Component } from 'react';
import SearchBox from './SearchBox.js';

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <SearchBox />
            </div>
        )
    }
}

export default SearchBar;