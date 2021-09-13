import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInput extends React.Component {
  render() {
    const { value, handleChange, describe, name } = this.props;
    const nameFilter = (name === 'imagePath') ? 'image' : name;
    const typefilter = (name === 'rating') ? 'number' : 'text';
    return (
      <label
        htmlFor={ `${nameFilter}-input` }
        data-testid={ `${nameFilter}-input-label` }
      >
        {describe}
        <input
          type={ typefilter }
          value={ value }
          name={ name }
          data-testid={ `${nameFilter}-input` }
          // id={ `${nameFilter}-input` }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  describe: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

AddMovieInput.defaultProps = {
  value: '',
};

export default AddMovieInput;
