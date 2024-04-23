import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import './App.css'
import Login from './component/Login';
import Registr from './component/Registr';

const App = () => {
  const [userData, setUserData] = useState(null);

  const updateUser = (data) => {
    setUserData(data);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home userData={userData} />}
        />
        <Route
          path='/login'
          element={<Login/>}
        />
        <Route
          path='/registr'
          element={<Registr/>}
        />
      </Routes>
      
    </Router>
  );
};

export default App;
