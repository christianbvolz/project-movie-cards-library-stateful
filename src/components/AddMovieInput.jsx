import React from 'react';

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

export default AddMovieInput;
