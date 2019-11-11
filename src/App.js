import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';

 class App extends Component {
   render() {
    return (
      <div className='App'>
        <header>
          <h1>Google Book Search</h1>
          <SearchBar />
          {/* <PrintTypeFilter />
          <BookTypeFilter /> */}
        </header>
        <main>
          {/* <ResultsList /> */}
        </main>
      </div>
    );
  }
}
export default App;