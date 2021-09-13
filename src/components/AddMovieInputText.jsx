import React from 'react';

class AddMovieInputText extends React.Component {
  render() {
    const { value, handleChange, describe, name } = this.props;
    const nameFiltered = (name === 'imagePath') ? 'image' : name;
    return (
      <label
        htmlFor={ `${nameFiltered}-input` }
        data-testid={ `${nameFiltered}-input-label` }
      >
        {describe}
        <input
          type="text"
          value={ value }
          name={ name }
          data-testid={ `${nameFiltered}-input` }
          // id={ `${name}-input` }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default AddMovieInputText;
