import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import  { useEffect } from 'react'
import userService from '../services/user.service';
import Transaction from './Transaction'
import { useState } from 'react';
 


export default function TransactionsTable() {
    const [transactions,setTransactions]=useState([]);
    const id=localStorage.getItem("id");
    useEffect(() => {
      
      userService.getTransactions(id).then(response=>{
        console.log(response.data);
        setTransactions(response.data); 
      }).catch((e)=>{console.log(e)})
      }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell># Transaction Id</TableCell>
            <TableCell align="right">Sender email</TableCell>
            <TableCell align="right">Receiver email&nbsp;(g)</TableCell>
            <TableCell align="right">Date and Time&nbsp;(g)</TableCell>
            <TableCell align="right">Amount&nbsp;(g)</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {transactions.map((transaction,index)=>{ return  <Transaction transaction={transaction}/>}
            )}

         
        </TableBody>
      </Table>
    
    </TableContainer>
  );
}
