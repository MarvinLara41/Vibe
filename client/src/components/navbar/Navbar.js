import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Navbar() {
	return (
		<div className="bar">
			<Link to="/home">Home</Link>
			<br />
			<Link to="/workout">Workouts</Link>
			<br />
		</div>
	);
}

export default Navbar;
