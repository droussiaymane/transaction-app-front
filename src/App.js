import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';

import axios from 'axios';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + user ;

  }
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route 
                   path="/home"
                   element={<Home/>} />

   
      </Routes>
    </BrowserRouter>
  );
}

export default App;

