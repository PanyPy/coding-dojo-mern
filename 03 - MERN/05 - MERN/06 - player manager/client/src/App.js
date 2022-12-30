import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';
import Layout from './components/Layout';
import PlayerStatus from './components/PlayerStatus';

function App() {
return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/players/list" render={ (routeProps) => <Layout {...routeProps}><PlayerList {...routeProps} /></Layout>}/>
        <Route exact path="/players/addplayer" render={ routeProps => <Layout {...routeProps}><PlayerForm id = {routeProps.match.params.id} {...routeProps}/></Layout>} />
        <Route path="/players/:id/edit" render={ (routeProps) => <Layout {...routeProps}><PlayerForm id = {routeProps.match.params.id} {...routeProps} isEdit /></Layout>}/>
        <Route path="/status/game/:id" render={ (routeProps) => <Layout {...routeProps}><PlayerStatus id = {routeProps.match.params.id} {...routeProps} isEdit /></Layout>}/>
        <Route exact path="/" render={ (routeProps) =>  routeProps.history.push('/players/list')} />

      </BrowserRouter>
    </div>
  );
}

export default App;
