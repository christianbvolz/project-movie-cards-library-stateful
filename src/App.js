import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange=""
        bookmarkedOnly=""
        onBookmarkedChange=""
        selectedGenre=""
        onSelectedGenreChange=""
      />
      <AddMovie />
    </div>
  );
}

export default App;
