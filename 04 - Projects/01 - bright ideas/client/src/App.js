import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import WelcomeLayout from './components/WelcomeLayout';
import UserDetails from './components/Users/UserDetails';
import Layout from './components/Layout';
import IdeaList from './components/Ideas/IdeaList';
import IdeaDetails from './components/Ideas/IdeaDetails';

// axios default config
axios.defaults.withCredentials = true;
axios.interceptors.response.use((response) => {
return response }, function (error) {
  if (error.response.status === 401 || error.response.status === 403) {
    // navigate('/login'); should be integrated to routes
    window.location.href = '/';
  }

  return Promise.reject(error);
});


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Auth */}
          <Route exact path="/" element={  <WelcomeLayout/> }/>

          {/* User  */}
          <Route exact path="/users/:id" element={ <Layout title="User Details" showLogout><UserDetails/></Layout>} />

          {/* Ideas  */}
          <Route exact path="/bright_ideas" element={ <Layout title="Ideas" showLogout><IdeaList /></Layout>}/>
          <Route exact path="/bright_ideas/:id" element={ <Layout title="Ideas" showLogout><IdeaDetails /></Layout>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
