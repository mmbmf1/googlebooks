import React, { Component } from 'react';
import FilterList from './FilterList/FilterList';

class Search extends Component {

constructor(props) {
    super(props);
    this.state = {
        searchTerm: '',
        printType: 'All',
        bookType: 'None'
    };
}

updateSearchTerm(term) {
    console.log(term);
    this.setState({
        searchTerm: term
    });
}

updatePrintType(newSelection) {
    this.setState({
        printType: newSelection
    });
}

updateBookType(newSelection) {
    this.setState({
        bookType: newSelection
    })
}

    render() {
        return (
            <div className='search_form'>
                <form>
                    <div className='search_bar'>
                        Search:
                        <input 
                            placeholder='Search a book'
                            onClick={e => this.updateSearchTerm(e.target.value)} 
                        />                            
                        <button
                            onClick={(e, searchTerm, printType, bookType) => 
                                this.props.handleSearch(e, this.state.searchTerm, this.state.printType, this.state.bookType)}
                        >
                        Search
                        </button>
                    </div>
                    <div className='filter_bar'>
                        <FilterList
                            updatePrintType={newSelection => this.updatePrintType(newSelection)}
                            updateBookType={newSelection => this.updateBookType(newSelection)}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;