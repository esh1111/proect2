import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('userData');
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
        <div className='Cj'> 
        <Link to="/login">Войти</Link>
        <Link to="/Registr">Регистрация</Link>
        </div>
        
        </>
        
      ) : (
        <div>
          <h2>Добро пожаловать, {userData?.fio}</h2>
          <p>Номер: {userData?.nomer}</p>
          <p>Город: {userData?.city}</p>
          <button onClick={handleLogout}>Выход</button>
        </div>
      )}
    </div>
  );
};

export default Home;
