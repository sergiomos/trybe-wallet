import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import { renderExpenseForm } from '../actions';

import { Container, Main, AddButton } from './styles/wallet';

import AddExpenseForm from '../components/AddExpenseForm';
import EditExpenseForm from '../components/EditExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';

const Wallet = () => {
  const globalState = useSelector((store) => store);
  const { editMode } = globalState.wallet;
  const dispatch = useDispatch();

  return (
    <Container>
      <Header />
      <Main>
        {editMode ? <EditExpenseForm /> : <AddExpenseForm />}
        <ExpenseTable />
        <AddButton onClick={ () => dispatch(renderExpenseForm(true)) }>
          <FiPlus />
        </AddButton>
      </Main>
    </Container>
  );
};

export default Wallet;
