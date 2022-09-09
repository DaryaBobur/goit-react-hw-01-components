import PropTypes from 'prop-types';
import { ColumnTitle, BodyTable, TableColumn, Table, TableItem } from './TransactionHistory.styled';

export function TransactionHistory({items}) {
return (
<Table className="transaction-history">
 <ColumnTitle>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </ColumnTitle>
 <BodyTable>
 {items.map(item => ( 
    <TableItem key={item.id}>
      <TableColumn>{item.type}</TableColumn>
      <TableColumn>{item.amount}</TableColumn>
      <TableColumn>{item.currency}</TableColumn>
    </TableItem>))}
   </BodyTable>
</Table>)
};

TransactionHistory.propTypes = {
items:  PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}))

};