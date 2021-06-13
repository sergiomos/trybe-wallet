import React from 'react';
import { func, string } from 'prop-types';
import { Label, Input } from './style';

function TextInput({ label, onChange, value, name }) {
  return (
    <Label htmlFor={ name }>
      {`${label}`}
      <Input
        type="text"
        id={ name }
        name={ name }
        onChange={ onChange }
        value={ value }
        data-testid={ `${name}-input` }
      />
    </Label>
  );
}

TextInput.propTypes = {
  label: string,
  value: string,
  name: string,
  onChange: func,
}.isRequired;

export default TextInput;
