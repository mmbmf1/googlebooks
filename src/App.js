import React, { Component } from 'react';
import Header from './Header/Header';
import Search from '';
import BookList from '';

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