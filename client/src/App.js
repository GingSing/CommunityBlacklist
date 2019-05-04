import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Info } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/info" component={Info} />
      </Switch>
    </div>
  );
}

export default App;
