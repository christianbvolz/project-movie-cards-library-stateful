import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.filters = this.filters.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const valueFilter = (name === 'bookmarkedOnly') ? target.checked : target.value;
    this.setState({ [name]: valueFilter });
  }

  filters({ searchText, bookmarkedOnly, selectedGenre, movies }) {
    const moviesFiltered = movies.filter(({ title, subtitle, storyline }) => {
      const conditionTitle = title.includes(searchText);
      const conditionSubtitle = subtitle.includes(searchText);
      const conditionStoryLine = storyline.includes(searchText);
      return (conditionTitle || conditionSubtitle || conditionStoryLine);
    });
    if (bookmarkedOnly) {
      return moviesFiltered.filter(({ bookmarked }) => bookmarked === true);
    } if (selectedGenre) {
      return moviesFiltered.filter(({ genre }) => genre === selectedGenre);
    }
    return moviesFiltered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filters(this.state) } />
        <AddMovie />
      </>
    );
  }
}

export default MovieLibrary;
