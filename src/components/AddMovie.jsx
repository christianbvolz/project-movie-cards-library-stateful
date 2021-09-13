import React from 'react';
import AddMovieInput from './AddMovieInput';

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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    // const describe = ["Título", "Subtítulo", "Imagem", "Sinopse", "Avaliação", "Gênero"];
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
        <label htmlFor="d" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyLine }
            data-testid="storyline-input"
            name="storyLine"
            onChange={ this.handleChange }
          />
        </label>
        <AddMovieInput
          value={ rating }
          name="rating"
          handleChange={ this.handleChange }
          describe="Avaliação"
        />
      </form>
    );
  }
}

export default AddMovie;
