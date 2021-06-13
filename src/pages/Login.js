import React from 'react';
import Container from './styles/login';
import LoginCover from '../components/LoginCover';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  render() {
    return (
      <Container>
        <LoginCover />
        <LoginForm />
      </Container>
    );
  }
}

export default Login;
