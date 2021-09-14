import React from 'react';
import PropTypes from 'prop-types';
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
    this.onClick = this.onClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const valueFilter = (name === 'bookmarkedOnly') ? target.checked : target.value;
    this.setState({ [name]: valueFilter });
  }

  onClick(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
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
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
