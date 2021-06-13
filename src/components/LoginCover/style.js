import styled from 'styled-components';

export const Container = styled.div`
  width: 65vw;
  height: 100vh;
  position: relative;
`;

export const BlackCover = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(37, 37, 37, 0.45), rgba(37, 37, 37, 0.45));
  position: absolute;
`;

export const Image = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
