import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
`;

export const AddButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #FC6969;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fafafa;
  font-weight: 700;
  font-size: 40px;

  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3;

  position: fixed;
  right: 35px;
  bottom: 35px;
  z-index: 1;

  &:hover {
    opacity: 0.8;
  }
`;
