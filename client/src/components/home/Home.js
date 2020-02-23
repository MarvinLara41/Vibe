import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';
import auth from '../auth.js';
// import API from '../../utils/API';
import './home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			goal: ''
		};

		this.handleGoalChange = this.handleGoalChange.bind(this);
	}

	handleGoalChange(e) {
		this.setState({
			goal: e.target.value
		});
	}

	goalSubmit(e) {
		e.preventdefault();
		console.log('goal submit button');
	}

	render() {
		return (
			<div className="dashboard">
				<h3>Welcome, let's set some goals</h3>

				<div className="welcomeDash">
					<div className="target">
						<p>What's your target?</p>
						<form onSubmit={this.goalSubmit}>
							<input
								placeholder="lose weight/get strong"
								type="text"
								value={this.state.goal}
								onChange={this.handleGoalChange}
							/>
							<br />
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>

				<div className="navbar">
					<NavBar />

					<button
						className="logOut"
						onClick={() => {
							auth.logout(() => {
								this.props.history.push('/');
							});
						}}
					>
						Logout
					</button>
				</div>
			</div>
		);
	}
}

export default Home;
