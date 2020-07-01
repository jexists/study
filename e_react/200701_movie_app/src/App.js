//app.js

import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import "./app.css";
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Nav from './components/Nav';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;