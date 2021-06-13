/* eslint-disable max-lines-per-function */
import React from 'react';
import { arrayOf, string, func } from 'prop-types';
import { useSelector } from 'react-redux';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import Option from '../Option';

import { Container, Form, Button } from './style';

const handleChange = async ({ target: { id, value } }, setExpense, expense) => {
  setExpense({ ...expense, [id]: value });
};

const ExpenseForm = ({
  expense,
  setExpense,
  currencies,
  methods = [],
  tags = [],
  onSubmit,
  button,
  btnColor,
}) => {
  const { shouldExpenseFormRender } = useSelector((state) => state).wallet;
  return (
    <Container render={ shouldExpenseFormRender }>
      <Form onSubmit={ onSubmit }>
        <div>
          <TextInput
            label="Valor"
            name="value"
            onChange={ (e) => handleChange(e, setExpense, expense) }
            value={ expense.value }
          />

          <SelectInput
            label="Moeda"
            name="currency"
            value={ expense.currency }
            onChange={ (e) => handleChange(e, setExpense, expense) }
          >
            {currencies.map((opt) => (<Option key={ opt } option={ opt } />))}
          </SelectInput>
        </div>

        <SelectInput
          label="Método de pagamento"
          name="method"
          value={ expense.method }
          onChange={ (e) => handleChange(e, setExpense, expense) }
        >
          {methods.map((opt) => (<Option key={ opt } option={ opt } />
          ))}
        </SelectInput>

        <SelectInput
          label="Tag"
          name="tag"
          value={ expense.tag }
          onChange={ (e) => handleChange(e, setExpense, expense) }
        >
          {tags.map((opt) => (<Option key={ opt } option={ opt } />))}
        </SelectInput>

        <TextInput
          label="Descrição"
          name="description"
          onChange={ (e) => handleChange(e, setExpense, expense) }
          value={ expense.description }
        />

        <Button type="submit" bgColor={ btnColor }>{button}</Button>
      </Form>
    </Container>
  );
};

ExpenseForm.propTypes = {
  currencies: arrayOf(string),
  tags: arrayOf(string),
  methods: arrayOf(string),
  button: string,
  onSubmit: func,
}.isRequired;

export default ExpenseForm;
