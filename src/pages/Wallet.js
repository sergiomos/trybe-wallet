import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renderExpenseForm } from '../actions';
import AddExpenseForm from '../components/AddExpenseForm';
import EditExpenseForm from '../components/EditExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import { Container, Main, AddButton } from './styles/wallet';

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
        <AddButton onClick={ () => dispatch(renderExpenseForm(true)) }>Add</AddButton>
      </Main>
    </Container>
  );
};

export default Wallet;
