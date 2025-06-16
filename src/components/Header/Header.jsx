import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <Link to="/" className={style.logoLink}>SocialNetwork</Link>
            </div>
            <Nav />
        </header>
    );
};

export default Header;