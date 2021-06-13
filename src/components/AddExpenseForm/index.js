/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { arrayOf, func, object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, fetchCurrencies, getCurrenciesCode } from '../../actions';
import ExpenseForm from '../ExpenseForm';
// import { Form, Label, input, Select, Option } from './style';

const handleSubmit = async (e, expense, dispatch, expenses, setExpense) => {
  e.preventDefault();
  dispatch(addExpense({
    id: expenses.length,
    ...expense,
    exchangeRates: await fetchCurrencies(),
  }));
};

const AddExpenseForm = () => {
  const [expense, setExpense] = useState({
    method: 'Dinheiro',
    currency: 'USD',
    tag: 'Alimentação',
  });

  const { currencies, expenses, tags, methods } = useSelector(({ wallet }) => wallet);
  const dispatch = useDispatch();
  console.log(methods, tags);

  useEffect(() => {
    dispatch(getCurrenciesCode());
  }, []);

  return (
    <ExpenseForm
      expense={ expense }
      setExpense={ setExpense }
      currencies={ currencies }
      methods={ methods }
      tags={ tags }
      onSubmit={ (e) => handleSubmit(e, expense, dispatch, expenses) }
      button="Adicionar despesa"
      btnColor="#FF9292"
    />
  );
};

export default AddExpenseForm;

AddExpenseForm.propTypes = {
  currencies: arrayOf(object),
  expenses: arrayOf(object),
  fetchCurrencies: func,
  addExpense: func,
}.isRequired;
