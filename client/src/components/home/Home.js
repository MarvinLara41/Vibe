import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';
import auth from '../auth.js';

class Home extends Component {
   
   render(){
       return(
           <div className="dashboard">
                <h3>Main page</h3>
                <div className="navbar">
                    <NavBar />

                    <button onClick={() => {
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