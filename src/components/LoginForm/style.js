import styled from 'styled-components';

export const Container = styled.div`
  width: 35vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  padding: 80px 40px;
  background-color: rgba(25, 25, 35, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
`;

export const Input = styled.input`
  height: 40px;
  background: transparent;
  padding: 5px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-bottom: 0.2rem solid #fafafa;
  transition: 0.5s;
  color: #252525;

  &:hover {
    box-shadow: inset 0px 1px 4px rgba(30, 30, 30, 0.25);
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background: #159AB7;
  border-radius: 3px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  color: #fafafa;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
