import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutThunkCreator } from '../../store/reducers/authReducer';
import style from './Logout.module.css';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logoutThunkCreator());

        const timer = setTimeout(() => {
            navigate('/login');
        }, 2000);

        return () => clearTimeout(timer);
    }, [dispatch, navigate]);

    return (
        <div className={style.logoutContainer}>
            <div className={style.logoutMessage}>
                <h2>You have been logged out</h2>
                <p>Redirecting to login page...</p>
                <div className={style.spinner}></div>
            </div>
        </div>
    );
};

export default Logout;