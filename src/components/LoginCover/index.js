import React from 'react';
import image from '../../images/wallet.jpg';
import { Image, BlackCover, Container } from './style';

const LoginCover = () => (
  <Container>
    <BlackCover />
    <Image src={ image } />
  </Container>
);

export default LoginCover;
