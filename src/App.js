import React, { Component } from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import BookList from './BookList/BookList';

 class App extends Component {
   render() {
    return (
      <div className='App'>
        <Header />
        <Search />
        <BookList />
      </div>
    );
  }
}
export default App;