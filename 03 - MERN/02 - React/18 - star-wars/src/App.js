import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchList from './components/SearchList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><SearchList /></Route>
        <Route path="/:route/:id" render={(routeProps) => <SearchList {...routeProps} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
