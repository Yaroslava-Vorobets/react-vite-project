
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404</h1>
            <h2>Сторінка не знайдена</h2>
            <p>Вибачте, але сторінка, яку ви шукаєте, не існує.</p>
            <Link to="/">Повернутися на домашню сторінку</Link>
        </div>
    );
};

export default NotFoundPage;