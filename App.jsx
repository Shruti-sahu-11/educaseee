import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />;
          <Route path ='/signup' element={<Signup />} />;
          <Route path ='/landing' element={<Landing />} />;
          <Route path ='/profile' element={<Profile />} />;
          <Route path ='/login' element={<Login />} />;
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App