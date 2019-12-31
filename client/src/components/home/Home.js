import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';
import auth from '../auth.js';
import './style.css';

class Home extends Component {
   
   render(){
       return(
           <div className="dashboard">
                <h3>Welcome, let's set some goals</h3>
                
                <div className="welcomeDash">
                    
                </div>
                
                
                <div className="navbar">
                    <NavBar />

                    <button className="logOut" onClick={() => {
                        auth.logout(() => {
                            this.props.history.push("/");
                        })
                    }}>Logout</button>
                </div>
           </div>
       )
   }
}

export default Home