import { Box, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import userService from '../services/user.service';
import Message from "./Message";
import Button from '@mui/material/Button';
import TransactionFormAccountNumber from './TransactionFormAccountNumber';

const TransactionForm = ({setShowModal,setShowAccountNumberModel}) => {

    const [showError,setShowError]=useState(false);
    const navigate = useNavigate();
    const [emailReceiver,setEmailReceiver]=useState("");
    const emailSender=JSON.parse(localStorage.getItem("email"));
    const [amount,setAmount]=useState(0)
    const [responseMessage,setResponseMessage]=useState("")


    async function submitHandler() {
        userService.createTransaction({emailSender,emailReceiver,amount}).then(response=>{

              toast.success(response.data.message);
                setShowModal(false);
                navigate("/home")


        }
        )
        .catch((e)=>{
          setResponseMessage(e.response.data.message);
            setShowError(true);
            toast.error(e.response.data.message);
        }
        )

    }

  return (
    <div>
    <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Transfer Amount</h1>


    <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email receiver"
              name="email"
              autoComplete="email"
              autoFocus
              value={emailReceiver} onChange={(e)=>setEmailReceiver(e.target.value)}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="amount"
              label="amount"
              type="number"
              id="password"
              autoComplete="current-password"
              value={amount} onChange={(e)=>setAmount(e.target.value)}

            />

            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitHandler}
>
              Submit
            </Button>


            <Button onClick={()=>{setShowAccountNumberModel(true)}}>Transfer by account number </Button>


          </Box>

  </div>

      )
}

export default TransactionForm
