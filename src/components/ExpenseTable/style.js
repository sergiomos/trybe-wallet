import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 25px;
`;

export const Table = styled.table`
  width: 100%;
  position: relative;
`;

export const Thead = styled.thead`
  background-color: #757575;
  color: #fafafa;
`;

export const Tbody = styled.tbody`
   .tag {
    font-size: 14px;
    color: white;
    font-weight: 700;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: none;
  }
`;

export const Td = styled.td`
  color: #252525;
  padding: 5px 0;
  text-align: center;
  background-color: ${(props) => props.color};
`;

export const Th = styled.th`
  padding: 10px 5px;
`;

export const Button = styled.button`
  padding: 0 6px ;
  color: #252525;
  background: transparent;
  font-size: 20px;
  border: none;
  cursor: pointer;

  .deleteIcon:hover {
    color: #F83B3B;
  }

  .editIcon:hover {
    color: #FFD260;
  }
`;
export const WithoutExpenses = styled.span``;
