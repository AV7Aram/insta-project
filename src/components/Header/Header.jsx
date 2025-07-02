import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunkCreator } from '../../store/reducers/authReducer';

import Nav from '../Nav/Nav';

import style from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth, login } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logoutThunkCreator());
        navigate('/logout');
    };

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <NavLink to="/" className={style.logoLink}>SocialNetwork</NavLink>
            </div>

            <div className={style.navWrapper}>
                <Nav />

                <div className={style.authSection}>
                    {isAuth ? (
                        <>
                            <span className={style.userName}>{login}</span>
                            <button
                                onClick={handleLogout}
                                className={style.logoutButton}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink to="/login" className={style.loginButton}>
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;