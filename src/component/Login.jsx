import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [Nomer, setNomer] = useState('');
  const [PassWord, setPassWord] = useState('');

  const handleLogin = async () => {
    const response = await fetch(`http://localhost:5155/api/User/Login/login?Nomer=${Nomer}&PassWord=${PassWord}`);
    const data = await response.json();
    if (response.ok) {
      // Успешный вход
      localStorage.setItem('userData', JSON.stringify(data)); // Сохраняем данные пользователя в localStorage
      navigate('/');
    } else {
      // В случае ошибки отобразить сообщение об ошибке
      alert(data.message);
    }
  };

  return (
    <div className='register'>
      <div className='okno-reg'>

      <div className='regis-text'>
          <h1><b>Вход</b></h1>
        </div>

        <div className='phone'>
        <h2>Телефон</h2>
          <input
            className='phone-ukaz'
            type="text"
            name="nomer"
          value={Nomer}
          onChange={(e) => setNomer(e.target.value)}
        />
        
        </div>
        <div className='password'>
        <h2>Пароль</h2>
          <input
            className='password-ukaz'
            type="password"
            name="passWord"
            onChange={(e) => setPassWord(e.target.value)}
          />
          </div>

          
            <div className='class123'>
              
                  <button type="submit" className='reg-button1'>
                    <Link to="/Registr" className='s123'>
                      <h2>Зарегистрироваться</h2>
                    </Link>
                  </button>
             </div>
                  
              <div className='class12'>
                  <button onClick={handleLogin} className='reg-button'>
                    <h2>Войти</h2>
                  </button>
           
              
            </div>
              
       
      </div>
    </div>
  );
};

export default Login;
