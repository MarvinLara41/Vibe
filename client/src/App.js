import React, { Component } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Home from  './components/home/Home'
import Workout from './components/workout/Workout';
import NavBar from './components/navbar/Navbar';

let loggedin = false

const token = localStorage.getItem("token")

console.log(token)

if(token === "undefined"){
  loggedin = false
}
else if(token) {
  loggedin = true
}


class App extends Component {
  constructor(props){
    super(props)

  this.state = {
    token:loggedin
  }
  }

  handleSuccessfulAuth(){
  this.props.history.push("/home")
  }

  render(){

     const PrivateRoute =({component: Component, ...rest}) =>(
    <Route {...rest} render = {(props) =>(
      this.state.token === true 
      ? <Component {...props} />
      : <Redirect to = "/" />
    )} />
  
  )

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path ="/" exact component={Welcome} />
            <PrivateRoute path="/home" exact component={Home}/>
        </Switch>
      </div>
     </Router> 
  );
  }
}

export default App;
