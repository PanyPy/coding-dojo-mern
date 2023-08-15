import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';
import PlayerStatus from './components/PlayerStatus';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Layout from './layouts/Layout';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
axios.interceptors.response.use((response) => {
  return response 
}, function (error) {
  const originalRequest = error.config;

  if (error.response.status === 401) {
    window.location.href = '/login';
  }

  return Promise.reject(error);
});

axios.interceptors.response.use(
  // function(successRes) {
  //   ... modify response; 
  //   return successRes;
  // }, 
  // function(error) {
  //   ... return Promise.reject(error);
  // }
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/players/list" element={ <Layout><PlayerList /></Layout>}/>
          <Route exact path="/players/addplayer" element={ <Layout><PlayerForm/></Layout>} />
          <Route path="/players/:id/edit" element={ <Layout><PlayerForm isEdit /></Layout>}/>
          <Route path="/status/game/:id" element={ <Layout><PlayerStatus isEdit /></Layout>}/>
          <Route path="/login" element={ <Login  /> }/>
          <Route path="/register" element={ <SignUp  /> }/>
          <Route exact path="*" element={ <Navigate to='/players/list' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
