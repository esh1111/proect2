import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Conteent.css'

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
            </div>
        </div>
      );

};
export default Content;
