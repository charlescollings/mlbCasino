import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Header from './components/Header'

const App = () => (
  <Router>
    {/* put header or nav here */}
    <div>
      <Header>Header</Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
