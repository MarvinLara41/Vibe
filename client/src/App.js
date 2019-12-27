import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <Router>
      <div className="App">
        <Welcome />
      </div>
     </Router> 
  );
}

export default App;
