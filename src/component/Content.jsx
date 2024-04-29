import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Conteent.css'
import rs from './images/rs.png'
import vl from './images/vl.jpg'
import tk from './images/tk.jpg'
import sh from './images/sh.png'

const Content = () => {
    const navigate = useNavigate();

    return (
        <div className='content-page'>
            <div className='content-cen'>
                <div className='verh-tri-cen'>
                    <div className='first-cen'>
                        <div className='second-cen'>
                            <div className='third-cen'></div>
                        </div>
                    </div>
                </div>
                <div className='new-cen'>
                    <h3 className='new-text-cen'>Новинки литературы</h3>
                </div>
                <div className='genre-cen'>
                    <h3 className='genre-text-cen'>Жанры</h3>
                </div>
                <div className='obmen-cen'>
                    <h3 className='obmen-text-cen'>Книги для обмена</h3>
                </div>
                <div className='razrab-cen'>
                    <div className='first-raz-cen'>
                        <img src={vl} alt="" className='vl-img'/>
                        <p className='name-raz-cen'>Влад/Еж</p>
                        <p className='role-raz-cen'>Глава проекта</p>
                    </div>
                    <div className='second-raz-cen'>
                        <img src={sh} alt="" className='sh-img'/>
                        <p className='name-raz-cen'>Жаслан/Жека</p>
                        <p className='role-raz-cen'>Бэк</p>
                    </div>
                    <div className='third-raz-cen'>
                        <img src={rs} alt="" className='rs-img'/>
                        <p className='name-raz-cen'>Рашид/Рашки</p>
                        <p className='role-raz-cen'>Душа</p>
                    </div>
                    <div className='fotch-raz-cen'>
                        <img src={tk} alt="" className='tk-img'/>
                        <p className='name-raz-cen'>Тимур/Тимур2</p>
                        <p className='role-raz-cen'>Фронт</p>
                    </div>
                </div>
            </div>
        </div>
      );

};
export default Content;
