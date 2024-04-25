import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Register.css';

const Registr = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Nomer: '',
    Fio: '',
    city: '',
    PassWord: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5155/api/User/RegisterUser/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('userData', JSON.stringify(userData)); // Сохраняем данные пользователя в localStorage
        navigate('/'); // Перенаправляем пользователя на главную страницу
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };

  return (
    <div className='register'>
      <div className='okno-reg'>
        <div className='regis-text'>
            <h1><b>Регистрация</b></h1>
          </div>

        <form onSubmit={handleSubmit}>

          <div className='phone-reg'>
          <h2>Телефон</h2>
            <input
              className='phone-ukaz-reg'
              type="number"
              name="Nomer"
              value={formData.Nomer}
              onChange={handleChange}
            />
          </div>

          <div className='FIO'>
          <h2>ФИО</h2>
            <input
              className='FIO-ukaz'
              type="text"
              name="Fio"
              value={formData.Fio}
              onChange={handleChange}
            />
          </div>

          <div className='city'>
          <h2>Город</h2>
            <input
              className='city-ukaz'
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className='password'>
          <h2>Пароль</h2>
            <input
              className='password-ukaz'
              type="password"
              name="PassWord"
              value={formData.PassWord}
              onChange={handleChange}
            />
          </div>


          
            <div className='class123'>
              <button type="submit" className='reg-button'><h2>Зарегистрироваться</h2></button>
            </div>
          

        </form>
      </div>
    </div>
  );
};

export default Registr;
