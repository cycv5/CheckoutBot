import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Button from '@mui/material/Button';
import {socket} from '../context/socket';


function preventDefault(event) {
  event.preventDefault();
}



export default function Deposits() {


  return (
    <React.Fragment>
      <Title>Total Bill</Title>
      <Typography component="p" variant="h4">
        $1,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
       incl. $120 HST
      </Typography>
      <div>
      <Button variant="contained">Pay Now</Button>
      </div>
    </React.Fragment>
  );
}
