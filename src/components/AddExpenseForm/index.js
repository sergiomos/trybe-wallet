import React, { useEffect } from 'react';
import { arrayOf, func, object } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { fetchCurrency } from '../../actions';
// import { Form, Label, input, Select, Option } from './style';

const renderCurrencyOption = ({ code, name }) => (
  <option
    value={ code }
    key={ code }
    title={ name }
  >
    {code}
  </option>
);

const AddExpenseForm = ({ fetchCurrencies, currencies }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies);
  });

  return (
    <form>
      <label htmlFor="value">
        Valor:
        <input type="text" id="value" />
      </label>

      <label htmlFor="description">
        Descrição:
        <input type="text" id="description" />
      </label>

      <label htmlFor="currency">
        Moeda:
        <select id="currency" defaultValue="Selecione uma moeda">
          { currencies.map((currency) => renderCurrencyOption(currency))}
        </select>
      </label>

      <label htmlFor="payment">
        Método de pagamento:
        <select id="payment">
          <option value="">Dinheiro</option>
          <option value="">Cartão de crédito</option>
          <option value="">Cartão de débito</option>
        </select>
      </label>

      <label htmlFor="category">
        Tag:
        <select id="category">
          <option value="">Alimentação</option>
          <option value="">Lazer</option>
          <option value="">Trabalho</option>
          <option value="">Transporte</option>
          <option value="">Saúde</option>
        </select>
      </label>
    </form>
  );
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);

AddExpenseForm.propTypes = {
  currencies: arrayOf(object),
  fetchCurrencies: func,
}.isRequired;