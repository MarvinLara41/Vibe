import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';
import auth from '../auth.js';
import LoseWeight from './goals/loseWeight/loseWeight';
import GainMuscle from './goals/gainMuscle/gainMuscle';
// import API from '../../utils/API';
import './home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: ''
		};
		this.handleGoalChange = this.handleGoalChange.bind(this);
	}

	handleGoalChange(e) {
		this.setState({
			display: e.target.value
		});
	}

	render() {
		if (this.state.display === 'lose weight') {
			return (
				<div>
					<LoseWeight />
				</div>
			);
		} else if (this.state.display === 'gain muscle') {
			return (
				<div>
					<GainMuscle />
				</div>
			);
		}

		return (
			<div className="dashboard">
				<h3>Welcome, let's set some goals</h3>

				<div className="welcomeDash">
					<div className="target">
						<p>What's your target?</p>
						<div className="goal">
							<input
								className="input"
								type="text"
								placeholder="lose weight/ gain muscle"
								value={this.state.display}
								onChange={this.handleGoalChange}
							/>
						</div>
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
