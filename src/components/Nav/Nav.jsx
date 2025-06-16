import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? style.active : '';
    };

    return (
        <nav className={style.nav}>
            <Link
                to="/"
                className={`${style.navLink} ${isActive('/')}`}
            >
                Home
            </Link>
            <Link
                to="/users"
                className={`${style.navLink} ${isActive('/users')}`}
            >
                Users
            </Link>
        </nav>
    );
};

export default Nav;