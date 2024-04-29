import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Footeer.css'
import LogoFot from './images/fot.png'
import Git from './images/GitHub.png'
import Telega from './images/Telegram App.png'

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className='footer-page'>
            <div className='footer-line'>
                <div className='logo-fot'>
                    <img src={LogoFot} alt="" className='sam-logo-fot'/>
                </div>
                <div className='profile-fot'>
                    <h1 className='nadp-profile-fot'>Профиль</h1>
                    <div className='my-profile-fot'>
                        <ins><div>Мой профиль</div></ins>
                    </div>
                    <div className='my-lib-fot'>
                        <ins><div>Моя библиотека</div></ins>
                    </div>
                    <div className='friends-fot'>
                        <ins><div>Друзья</div></ins>
                    </div>
                    <div className='obmen-fot'>
                        <ins><div>Обмен</div></ins>
                    </div>
                </div>
                <div className='o-nas-fot'>
                    <h1>О нас</h1>
                    <div className='nadp-email-fot'>
                        <div>Наш eMail</div>
                    </div>
                    <div className='email-fot'>
                        <u><div>support-esh@electromail.io</div></u>
                    </div>    
                    <div className='number-fot'>
                        <div>Номер</div>
                    </div>
                    <div className='sam-number-fot'>
                        <u><div>+7 800 555 35 35</div></u>
                    </div>
                    <div className='img-fot'>
                        <img src={Git} alt="" className='git-fot'/>
                        <img src={Telega} alt="" className='telega-fot'/>
                    </div>
                </div>
            </div>
        </div>
      );

};
export default Footer;
