import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TransactionForm from './TransactionForm';
import  { useEffect, useState } from 'react'
import userService from '../services/user.service';
import TransactionFormAccountNumber from './TransactionFormAccountNumber';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showAccountNumberModel,setShowAccountNumberModel]=useState(false)


  const [balance,setBalance]=useState(0);
    const id=localStorage.getItem("id");
    useEffect(() => {
      
      userService.getBalance(id).then(response=>{
        setBalance(response.data.balance); 
      }).catch((e)=>{console.log(e)})
      }, [])

  return (
    <div>
        <Button onClick={handleOpen} variant="contained">Transfer Amount</Button> &nbsp; &nbsp; &nbsp;
        <Button variant="contained">Balance : {balance}</Button>

        <h1>Transaction History</h1>

        
        {!showAccountNumberModel ?    

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <TransactionForm setShowModal={handleClose} setShowAccountNumberModel={setShowAccountNumberModel} />      </Box>

      </Modal>
      :     <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
     <TransactionFormAccountNumber setShowModal={handleClose} setShowAccountNumberModel={setShowAccountNumberModel} />      </Box>

    </Modal>  }

      
    </div>
  );
}
