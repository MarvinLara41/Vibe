import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';
import auth from '../auth.js';
import LoseWeight from './goals/loseWeight/loseWeight';
import GainMuscle from './goals/gainMuscle/gainMuscle';
import './home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lose: false,
			gain: false,
		};
		this.submitLose = this.submitLose.bind(this);
		this.submitGain = this.submitGain.bind(this);
	}

	submitLose(e) {
		e.preventDefault();
		this.setState({
			lose: true,
		});
	}

	submitGain(e) {
		e.preventDefault();
		this.setState({
			gain: true,
		});
	}

	render() {
		if (this.state.lose === true) {
			return (
				<div>
					<LoseWeight />
				</div>
			);
		} else if (this.state.gain === true) {
			return (
				<div>
					<GainMuscle />
				</div>
			);
		}

		return (
			<div className="dashboard">
				<div>
					<h4> What is your goal? </h4>
					<div className="goals">
						<button className="loseBtn" onClick={this.submitLose}>
							Lose Weight
						</button>

						<button className="gainBtn" onClick={this.submitGain}>
							Gain Weight
						</button>
					</div>
				</div>
				<div className="navBar">
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
