import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(37, 37, 37, 0.5);
  position: absolute;
  top: 0;
  display: ${({ render }) => (render ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Form = styled.form`
  padding: 45px 55px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  background: #FAFAFA;
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;

export const Button = styled.button`
  width: 184px;
  margin: 25px 0;
  padding: 15px 0;
  background: ${({ bgColor }) => bgColor};
  border-radius: 2px;
  font-weight: 700;
  font-size: 18px;
  color: #FAFAFA;
  border: none;
  align-self: center;
  transition: 3ms;

  &:hover {
    opacity: 0.8;
  }
`;
