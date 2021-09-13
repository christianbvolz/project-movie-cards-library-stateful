import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTextArea extends React.Component {
  render() {
    const { storyLine, handleChange } = this.props;
    return (
      <label htmlFor="d" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyLine }
          data-testid="storyline-input"
          name="storyLine"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieTextArea.propTypes = {
  storyLine: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieTextArea;
