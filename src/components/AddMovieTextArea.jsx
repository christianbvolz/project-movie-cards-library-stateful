import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTextArea extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="d" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyline }
          data-testid="storyline-input"
          name="storyline"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieTextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieTextArea;
