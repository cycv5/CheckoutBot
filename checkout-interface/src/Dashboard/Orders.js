import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button, Icon } from '@mui/material';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '11101341101',
    'Fuji Apples',
    '3.99',
    '0',
    3.99,
  ),
  createData(
    1,
    '11101534301',
    'Playstation 5',
    '799.99',
    '86.79',
    889.23,
  ),
  createData(2, '11103432101', 'Bananas 5-pack', '8.49', '0', 8.49),
  createData(
    3,
    '11104329101',
    'Milk 2L Pack',
    '4.99',
    '0',
    4.99,
  ),
  createData(
    4,
    '11190112211',
    'Fleece Hoodie XL',
    '45.99',
    '5.65',
    57.88,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Items Scanned</Title>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell>Barcode</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Tax</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>${row.shipTo}</TableCell>
              <TableCell>${row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
              <TableCell align="right">{<DeleteOutlineIcon fontSize="small"/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </React.Fragment>
  );
}
