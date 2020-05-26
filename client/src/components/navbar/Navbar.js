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
			<Link to="/progress">Progress</Link>
		</div>
	);
}

export default Navbar;
