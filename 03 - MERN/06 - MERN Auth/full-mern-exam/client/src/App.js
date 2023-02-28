import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

// components
import UserList from './components/UserList';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';

import axios from 'axios';
import Layout from './components/Layout';
// axios default config
axios.defaults.withCredentials = true;
axios.interceptors.response.use((response) => {
return response }, function (error) {
  if (error.response.status === 401 || error.response.status === 403) {
    // navigate('/login'); should be integrated to routes
    window.location.href = '/login';
  }

  return Promise.reject(error);
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Layout> <UserList/> </Layout>}/>
          <Route path="/login" element={ <Login  /> }/>
          <Route path="/register" element={ <SignUp  /> }/>
          <Route exact path="*" element={ <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
