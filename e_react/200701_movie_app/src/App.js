//app.js

import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Nav from './components/Nav';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;