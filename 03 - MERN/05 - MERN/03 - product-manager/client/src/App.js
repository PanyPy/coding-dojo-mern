import './App.css';
import Main from './views/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={ (routeProps) => <Main {...routeProps} />}/>
        <Route exact path="/:id" render={ routeProps => <ProductForm id = {routeProps.match.params.id} isView/>} />
        <Route path="/:id/edit" render={ (routeProps) => <ProductForm id = {routeProps.match.params.id} isEdit />}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
