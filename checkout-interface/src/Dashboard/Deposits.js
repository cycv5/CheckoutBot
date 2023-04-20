import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Button from '@mui/material/Button';
import {socket} from '../context/socket';


function preventDefault(event) {
  event.preventDefault();
}



export default function Deposits(props) {
  const [totalBill, setTotalBill] = React.useState(0)
  const [totalTax, setTotalTax] = React.useState(0)

    React.useEffect(()=>{
      var totalBill = 0
      var totalTax = 0
      console.log("DEPOSITS", props.items)
      props.items.forEach(element => {
        console.log(element, "ELEMENT")
        totalBill = totalBill + element.price
        totalTax = totalTax + element.tax
      });
      setTotalBill(Math.round(totalBill * 100) / 100)
      setTotalTax(Math.round(totalTax * 100) / 100)
    }, [props.items])
  return (
    <React.Fragment>
      <Title>Total Bill</Title>
      <Typography component="p" variant="h4">
        ${totalBill}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
       incl. ${totalTax} HST
      </Typography>
      <div>
      <Button variant="contained">Pay Now</Button>
      </div>
    </React.Fragment>
  );
}
