import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete, MdEdit } from 'react-icons/md';
import { deleteExpense, editExpense } from '../../actions';
import WithoutExpenses from '../WithoutExpenses';

import { Container, Table, Thead, Tbody, Td, Th, Button } from './style';

const renderExpense = (expense, dispatch) => {
  const { id, description, tag, method, exchangeRates, value, currency } = expense;
  const exchangeRate = Number(exchangeRates[currency].ask);
  const convertedValue = (Number(value) * exchangeRate).toFixed(2);

  const tagColor = {
    Alimentação: '#3F9ADD',
    Lazer: '#9016DA',
    Trabalho: '#5ADB34',
    Transporte: '#DA9B16',
    Saúde: '#F2292D',
  };

  return (
    <tr>
      <Td>{description}</Td>
      <Td
        className="tag"
        color={ tagColor[tag] }
      >
        {tag}
      </Td>
      <Td>{method}</Td>
      <Td>{`${currency} ${value}`}</Td>
      <Td>{exchangeRates[currency].name.split('/')[0]}</Td>
      <Td>{`${currency} ${exchangeRate.toFixed(2)}`}</Td>
      <Td>
        {`R$ ${convertedValue}`}
      </Td>
      <Td>Real</Td>
      <Td>
        <Button
          data-testid="edit-btn"
          type="button"
          onClick={ () => dispatch(editExpense(id)) }
        >
          <MdEdit className="editIcon" />
        </Button>

        <Button
          data-testid="delete-btn"
          type="button"
          onClick={ () => dispatch(deleteExpense(id)) }
        >
          <MdDelete className="deleteIcon" />
        </Button>
      </Td>
    </tr>
  );
};

const ExpenseTable = () => {
  const { wallet: { expenses } } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <Container>
      <Table>
        <Thead>
          <Th>Descrição</Th>
          <Th>Tag</Th>
          <Th>Método de pagamento</Th>
          <Th>Valor</Th>
          <Th>Moeda</Th>
          <Th>Câmbio utilizado</Th>
          <Th>Valor convertido</Th>
          <Th>Moeda de conversão</Th>
          <Th>Editar/Excluir</Th>
        </Thead>
        <Tbody>
          {expenses.length === 0 ? <WithoutExpenses />
            : expenses.map((expense) => renderExpense(expense, dispatch))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ExpenseTable;
