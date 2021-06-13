import { SAVE_USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: 'sergiomos2010@gmail.com',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
