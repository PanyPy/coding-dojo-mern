import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={ (routeProps) => <AuthorList {...routeProps} />}/>
        <Route exact path="/new" render={ routeProps => <AuthorForm id = {routeProps.match.params.id}/>} />
        <Route path="/:id/edit" render={ (routeProps) => <AuthorForm id = {routeProps.match.params.id} isEdit />}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
