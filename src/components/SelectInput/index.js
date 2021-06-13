import React from 'react';
import { func, string } from 'prop-types';
import { Label, Select } from './style';

function SelectInput({ children, label, name, value, onChange }) {
  return (
    <Label htmlFor={ name }>
      {`${label}`}
      <Select
        name={ name }
        id={ name }
        value={ value }
        data-testid={ `${name}-input` }
        onChange={ onChange }
      >
        {children}
      </Select>
    </Label>
  );
}

SelectInput.propTypes = {
  label: string,
  name: string,
  value: string,
  onChange: func,
}.isRequired;

export default SelectInput;
