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
  /* position: relative; */
`;

export const AddButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #FC6969;
  color: #fafafa;
  font-weight: 700;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  position: fixed;
  right: 35px;
  bottom: 35px;
  z-index: 1;
`;
