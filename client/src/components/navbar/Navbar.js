import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return(
        <div>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/workout">Workouts</Link>
        <br />
        </div>
    )
}

export default Navbar;