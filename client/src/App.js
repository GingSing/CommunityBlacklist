import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Info, Home, Register, Post } from './pages';
import { NavBar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/post" component={Post} />
      </Switch>
    </div>
  );
}

export default App;
