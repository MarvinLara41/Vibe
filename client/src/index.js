import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Home from  './components/home/Home'
import ProtectRoute from "./components/protectedRoute.js";

function App() {
    return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path ="/" component={Welcome} />
            <ProtectRoute exact path="/home" component={Home}/>
            <Route path="*" component={() => "404 NOT FOUND"}/>
        </Switch>
      </div>
     </Router> 
  );
}

ReactDOM.render(<Router> <App /> </Router>, document.getElementById('root'));

