import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react'

const Transaction = ({transaction}) => {
  const email=JSON.parse(localStorage.getItem("email"));
  return (

<>
    <TableRow
    key={transaction.id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell component="th" scope="row">
    {transaction.id}
    </TableCell>
    <TableCell align="right"> {transaction.sender==email ? "You" : transaction.sender}</TableCell>
    <TableCell align="right">{transaction.receiver==email ? "You" : transaction.receiver}</TableCell>
    <TableCell align="right">{transaction.createdAt}</TableCell>
    <TableCell align="right">

    {transaction.sender==email ? (<>
      <Button variant="contained" color="error">
      -{transaction.amount}
</Button>

</>) : (<>      <Button variant="contained" color="success">

  +{transaction.amount}
</Button></>)}

    </TableCell>
    
  </TableRow>
  </>
  )
}

export default Transaction
