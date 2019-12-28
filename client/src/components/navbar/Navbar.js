import React from 'react';
import { Link } from 'react-router-dom';


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