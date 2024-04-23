import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Headeer.css'
import siteLogo from './images/logo.png'
import notificationsLogo from './images/notification.png'
import Login from './Login'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header-line'>
            <div className='elements-header'>
                <div className='logo-he'>
                    <img src={siteLogo} alt="" />
                </div>
                <div className='knigi-he'>
                    <h1>Книги</h1>
                </div>
                <div className='ludi-he'>
                    <h1>Люди</h1>
                </div>
                <div className='obmeni-he'>
                    <h1>Обмены</h1>
                </div>
                <div className='search-he'>
                    <input
                        className='stroka-search-he'
                        type="text"
                        name="search-str"
                        placeholder="Поиск..."/>
                </div>
                <div className='notifications-he'>
                    <img src={notificationsLogo} alt="" className='logo-img-samo'/>
                </div>
                <div className='profile-he'>

                </div>
                <div className='vhod-he'>
                    <button onClick={()=>{navigate('/login')}} className='vhod-but-he'><h2 >Вход</h2></button>
                </div>
            </div>
        </div>
      );

};
export default Header;
