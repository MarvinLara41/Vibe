import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import Workout from '../workout/Workout';
import Home from '../home/Home';

function Navbar() {
    return(
        <div>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/workout">Workout</Link>
        <br />
        </div>
    )
}

export default Navbar;