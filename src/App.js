import React from 'react';
import './App.css';
import {history} from "./helpers/history";
import {Router} from 'react-router-dom';
import Routing from "./router/routing";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routing/>
      </Router>
    </div>
  );
}

export default App;
