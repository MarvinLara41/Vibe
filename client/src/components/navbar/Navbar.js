import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../auth.js';
import './nav.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<header className="header">
				<nav className="navigation">
					<ul className="navigation_ul">
						<li>
							<Link to="/goals">Goals</Link>
						</li>
						<li>
							<Link to="/addworkout">Add Workout</Link>
						</li>
						<li>
							<Link to="/progress">Progress</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Navbar;
