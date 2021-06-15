import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 150px;
  left: 550px;
  font-weight: 700;
`;

const WithoutExpenses = () => (
  <Container>
    Sem despesas cadastradas
  </Container>
);

export default WithoutExpenses;
