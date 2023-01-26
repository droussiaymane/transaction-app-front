import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import AuthService from '../services/auth.service'
import { useNavigate } from "react-router-dom";
import Message from "./Message";
import toast, { Toaster } from 'react-hot-toast';


const theme = createTheme();

export default function SignIn() {
    const [showError,setShowError]=useState(false);
    const navigate = useNavigate();
    const [mail,setMail]=useState("")
    const [password,setPassword]=useState("")

    async function submitHandler(event) {
  event.preventDefault();
  AuthService.login(mail,password)
  .then((res)=>{
    toast.success(res.data.message);

  navigate('/home');
  })
  .catch((error)=>{
    setShowError(true);
    toast.error(error.response.data.message);
  })

    }

  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={mail} onChange={(e)=>setMail(e.target.value)}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password} onChange={(e)=>setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <Button
              type="button"
              onClick={submitHandler}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
