import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { API_KEY } from './../config';
const Header = () => {
    return (
        <header className='header'>
            <Link to="/quizes">
                Результаты теста
            </Link>
            <a href={`${API_KEY}/createQuiz/`}>
                Пройти тест
            </a>
        </header>
    );
};

export default Header;