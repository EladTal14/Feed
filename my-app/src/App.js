import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './assets/styles/styles.scss';
import { Home } from './pages/Home';
import { AppHeader } from './cmps/AppHeader';
import { Template } from './pages/Template';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route path="/template" component={Template} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
