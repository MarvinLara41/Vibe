import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';

class Home extends Component {
   
   render(){
       return(
           <div className="dashboard">
                <h3>Main page</h3>
                <div className="navbar">
                    <NavBar />
                </div>
           </div>
       )
   }
}

export default Home