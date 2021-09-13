import React from 'react';
import PropTypes from 'prop-types';
import AddMovieInput from './AddMovieInput';
import AddMovieSelect from './AddMovieSelect';
import AddMovieTextArea from './AddMovieTextArea';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieInput
          value={ title }
          name="title"
          handleChange={ this.handleChange }
          describe="Título"
        />
        <AddMovieInput
          value={ subtitle }
          name="subtitle"
          handleChange={ this.handleChange }
          describe="Subtítulo"
        />
        <AddMovieInput
          value={ imagePath }
          name="imagePath"
          handleChange={ this.handleChange }
          describe="Imagem"
        />
        <AddMovieTextArea storyLine={ storyLine } handleChange={ this.handleChange } />
        <AddMovieInput
          value={ rating }
          name="rating"
          handleChange={ this.handleChange }
          describe="Avaliação"
        />
        <AddMovieSelect
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button
          type="reset"
          data-testid="send-button"
          onClick={ this.resetState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
