import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';

import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="container-app">
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
