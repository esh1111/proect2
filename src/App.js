import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Registr from './component/Registr';
import './App.css'

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
          path="/login"
          element={<Login updateUser={updateUser} />}
        />
        <Route
          path="/Registr"
          element={<Registr updateUser={updateUser} />}
        />
      </Routes>
      
    </Router>
  );
};

export default App;
