import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../App.css';
import {MainGame} from './MainGame';
import {Landing} from './Landing';
import { Gameover } from './Gameover';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/main-game' component={MainGame}/>
          <Route path='/gameover' component={Gameover}/>
       </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
