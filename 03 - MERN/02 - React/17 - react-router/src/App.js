import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Hello from './components/Hello';
import Number from './components/Number';

function App() {
  return (
    <BrowserRouter>
      {/* <h1> Router Demo</h1> */}
      <Link to="/home">1. Home</Link>{" | "}
      <Link to="/number/1">2. Number</Link>{" | "}
      <Link to="/hello">3. Hello</Link>{" | "}
      <Link to="/hello/blue/red">4. Hello Color</Link>

      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/number/:number" render={(routeProps) => <Number {...routeProps} />} />
        <Route path="/:hello/:color/:background" render={(routeProps) => <Hello {...routeProps} />} />
        <Route path="/:hello" render={(routeProps) => <Hello {...routeProps} />} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
