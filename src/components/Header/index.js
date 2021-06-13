import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Header, UserEmail, TotalDebits, Currency } from './style';

export const WalletHeader = () => {
  const { wallet, user } = useSelector((state) => state);
  const { email: userEmail } = user;
  const { expenses } = wallet;

  const totalExpenses = expenses.reduce((acc, actual) => {
    const { value, currency, exchangeRates } = actual;
    const exchangeRate = exchangeRates[currency].ask;
    return acc + Number(value) * Number(exchangeRate);
  }, 0).toFixed(2);

  return (
    <Container>
      <Header>

        <UserEmail data-testid="email-field">
          <img src="https://source.unsplash.com/random" alt="user profile" />
          <p>{ userEmail }</p>
        </UserEmail>

        <div>

          <Currency data-testid="header-currency-field">
            BRL
          </Currency>

          <TotalDebits data-testid="total-field">
            R$
            {totalExpenses}
          </TotalDebits>
        </div>

      </Header>
    </Container>
  );
};

export default WalletHeader;
