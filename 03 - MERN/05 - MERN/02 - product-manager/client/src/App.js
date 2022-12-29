import './App.css';
import Main from './views/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={ (routeProps) => <Main {...routeProps} />}/>
        <Route path="/:id" render={ routeProps => <Detail {...routeProps} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
