import React, { Component } from 'react';
import FilterList from './FilterList/FilterList';

class Search extends Component {
    render() {
        return (
            <div className='search_form'>
                <form>
                    <div className='search_bar'>
                        Search:
                        <input placeholder='Search a book'></input>
                        <button>Search</button>
                    </div>
                </form>
                <FilterList />
            </div>
        )
    }
}

export default Search;