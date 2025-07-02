import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import UsersPage from './pages/UsersPage/UsersPage';
import UserPage from './pages/UserPage/UserPage';
import LoginPage from './pages/LoginPage/LoginPage';
import LogOut from './components/LogOut/Logout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { useDispatch, useSelector } from 'react-redux';
import { initializeAuthThunkCreator } from './store/reducers/authReducer';
import { useEffect } from 'react';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(initializeAuthThunkCreator());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route
            path="/profile"
            element={isAuth ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!isAuth ? <LoginPage /> : <Navigate to="/profile" />}
          />
          <Route path="/logout" element={<LogOut />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;