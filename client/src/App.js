import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import MlbMatchGame from './pages/mlbMatchGame';
import Header from './components/Header'
import GameBoard from './components/GameBoard';

const App = () => (
  <Router>
    <div>
      <Header>MLB Casino</Header>
      <GameBoard component={GameBoard}>
      </GameBoard>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MlbMatchGame" component={MlbMatchGame} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
