import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? style.active : '';
    };

    return (
        <nav className={style.nav}>
            <NavLink
                to="/"
                className={`${style.navLink} ${isActive('/')}`}
            >
                Home
            </NavLink>
            <NavLink
                to="/users"
                className={`${style.navLink} ${isActive('/users')}`}
            >
                Users
            </NavLink>
        </nav>
    );
};

export default Nav;