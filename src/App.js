import React, { Component } from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import BookList from './BookList/BookList';

 class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

handleSearch = (e, searchTerm, printType, bookType) => {// need to break this down with Jacob
    e.preventDefault();

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyA4DtRD-SqnCrYnGwbXCBXj-NfQOvmfxsE`;

    console.log(searchTerm, printType, bookType);

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState = ({
          books: data
        });
      })
      .catch(err => {
        this.setState =({
          error: err.message
        });
      });
  }


   render() {
    return (
      <div className='App'>
        <Header />
        <Search //how does this function work?
          handleSearch={(e, searchTerm, printType, bookType) => this.handleSearch(e, searchTerm, printType, bookType)}
          />
        <BookList
          books={this.state.books}
          />
      </div>
    );
  }
}
export default App;