/* eslint-disable max-lines-per-function */
import {
  REQUEST_CURRENCY,
  RECEIVE_CURRENCY,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  EDITED_EXPENSE,
  RENDER_EXPENSE_FORM,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  methods: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
  tags: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  editMode: false,
  editID: '',
  shouldExpenseFormRender: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return { ...state, loading: true };

  case RECEIVE_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      shouldExpenseFormRender: false,
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      editMode: true,
      shouldExpenseFormRender: true,
      editID: action.payload,
    };

  case EDITED_EXPENSE:
  {
    const oldExpenseIndex = state.expenses
      .indexOf(state.expenses.find(({ id }) => state.editID === id));
    state.expenses[oldExpenseIndex] = action.payload;
    return {
      ...state,
      expenses: [
        ...state.expenses,
      ],
      editID: '',
      editMode: false,
      shouldExpenseFormRender: false,
    };
  }

  case RENDER_EXPENSE_FORM:
    return {
      ...state,
      shouldExpenseFormRender: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
