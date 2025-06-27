import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import UsersPage from './pages/UsersPage/UsersPage';
import './App.css';
import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;