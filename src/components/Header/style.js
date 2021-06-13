import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserEmail = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  color: #252525;
  font-weight: 700;
  font-size: 16px;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;

export const TotalDebits = styled.span`
  padding: 20px 25px;
  background: #efefef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  font-weight: 700;
  font-size: 25px;
  color: #FE5151;
  text-align: center;
`;

export const Currency = styled.span`
  padding: 10px 15px;
  margin-right: 20px;
  background: #efefef;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
