import styled from 'styled-components';

export const Table = styled.table`
    border-spacing: 0;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-top: 30px;
`

export const ColumnTitle = styled.thead`
    background-color: #1f8b99;

th {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 100px;
    padding-right: 100px;
    color: #ffffff;
    font-weight: 500;
    border-right: 1px solid #ffffff;
}
` 

export const BodyTable = styled.tbody`
    text-align: center;
    text-transform: capitalize;
    color: #5a5555;
`

export const TableColumn = styled.td`
    border-bottom: 1px solid #c7c1c1;

:not(:last-child){
    border-right: 1px solid #c7c1c1;
}
`

export const TableItem = styled.tr`
:nth-child(2n) {
  background-color: #d5d4d4;
  }
`