import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Navbar() {
	return (
		<div className="bar">
			<Link to="/goals">Goals</Link>
			<br />
			<Link to="/addworkout">Add Workout</Link>
			<br />
			<Link to="/progress">Progress</Link>
		</div>
	);
}

export default Navbar;
