import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import authService from '../services/auth.service';
import ButtonAppBar from '../components/Navbar';
import SignIn from '../components/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  let islogged=authService.islogged();
  
  useEffect(()=>{
if(islogged){
  navigate("/home")
}
},[])
  return (
    <>
    <ButtonAppBar/>
        <SignIn/>

    </>
  )
}

export default Login
