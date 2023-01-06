import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';
import PlayerStatus from './components/PlayerStatus';
import Layout from './layouts/Layout';

function App() {
return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/players/list" element={ <Layout><PlayerList /></Layout>}/>
          <Route exact path="/players/addplayer" element={ <Layout><PlayerForm/></Layout>} />
          <Route path="/players/:id/edit" element={ <Layout><PlayerForm isEdit /></Layout>}/>
          <Route path="/status/game/:id" element={ <Layout><PlayerStatus isEdit /></Layout>}/>
          <Route exact path="*" element={ <Navigate to='/players/list' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
