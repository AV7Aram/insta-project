import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunkCreator, initializeAuthThunkCreator } from '../../store/reducers/authReducer';
import { loginSchema } from '../../schema/validationSchema';
import style from './LoginPage.module.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth, error } = useSelector(state => state.auth);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        dispatch(initializeAuthThunkCreator());
    }, [dispatch]);

    useEffect(() => {
        if (isAuth) {
            navigate('/profile');
        }
    }, [isAuth, navigate]);

    const handleSubmit = async (values, { setSubmitting }) => {
        const success = await dispatch(
            loginThunkCreator(values.email, values.password, values.rememberMe)
        );

        if (success) {
            navigate('/profile');
        }

        setSubmitting(false);
    };

    return (
        <div className={style.loginContainer}>
            <div className={style.loginCard}>
                <h2 className={style.title}>Login to Social Network</h2>

                <Formik
                    initialValues={{ email: '', password: '', rememberMe: false }}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form className={style.form}>
                            <div className={style.formGroup}>
                                <label htmlFor="email" className={style.label}>Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className={`${style.input} ${errors.email && touched.email ? style.error : ''}`}
                                    placeholder="Enter your email"
                                    autoComplete="username"
                                    id="email"
                                />
                                <ErrorMessage name="email" component="div" className={style.errorMessage} />
                            </div>

                            <div className={style.formGroup}>
                                <label htmlFor="passwordField" className={style.label}>Password</label>
                                <div className={style.passwordContainer}>
                                    <Field
                                        id="passwordField"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className={`${style.input} ${errors.password && touched.password ? style.error : ''}`}
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        className={style.togglePassword}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "🙈" : "👁️"}
                                    </button>
                                </div>
                                <ErrorMessage name="password" component="div" className={style.errorMessage} />
                            </div>

                            <div className={style.rememberMe}>
                                <label className={style.checkboxContainer}>
                                    <Field type="checkbox" name="rememberMe" />
                                    <span className={style.checkmark}></span>
                                    Remember me
                                </label>
                            </div>

                            {error && <div className={style.serverError}>{error}</div>}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={style.submitButton}
                            >
                                {isSubmitting ? 'Logging in...' : 'Log In'}
                            </button>
                        </Form>
                    )}
                </Formik>

                <div className={style.signupLink}>
                    Don't have an account? <a href="#">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;