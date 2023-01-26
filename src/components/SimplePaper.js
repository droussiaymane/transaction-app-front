import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import userService from '../services/user.service';
import  { useEffect,useState } from 'react'
import { json } from 'react-router-dom';


export default function SimplePaper() {
  const id=localStorage.getItem("id");
  

  const[data, setData]=useState({
    userName:'',
    email:'',
    accountNumber:'',
    contactNumber:''
  });

  useEffect(()=>{
    console.log('hello')

    userService.getUserDetails(id)
    .then((res)=> {
      setData(res.data);
     
      localStorage.setItem("accountNumber", JSON.stringify(res.data.accountNumber));
    });


  },[]);


  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '& > :not(style)': {
          m: 1,
          width: 1000,
          height: 250,
          marginLeft:20,
          textAlign:'center',
          marginTop:5,
          borderRadius: 20,
          
          
        },
      }}
    >
      
    
      <Paper elevation={3}>
        <h2 >Account Details</h2>
        <h4>UserName: {data.userName}</h4>
        <h4>Email: {data.email}</h4>
        <h4>Account Number: {data.accountNumber} </h4>
        <h4>Contact Number: {data.contactNumber}</h4>
       
      </Paper>

      
    </Box>
  );
}