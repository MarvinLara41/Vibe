import React, { Component } from 'react';
import NavBar from '../../../navbar/Navbar';
import Progress from '../../../progress/Progress';
import API from '../../../../utils/API';
import './loseWeight.css';

class LoseWeight extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weight: [],
			message: {},
			progress: false,
		};

		this.handleWeightChange = this.handleWeightChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleWeightChange(e) {
		this.setState({
			weight: e.target.value,
		});
	}

	submitForm(e) {
		e.preventDefault();
		API.saveProgress(this.state, (callback) => {
			console.log(callback);
		});
		this.setState({
			weight: [],
			progress: true,
		});
	}

	render() {
		if (this.state.progress === true) {
			return (
				<div>
					<Progress />
				</div>
			);
		}
		return (
			<div className="loseWeight">
				<NavBar className="lose-bar" />
				<div className="container">
					<h2>
						<b>Losing Weight</b>
					</h2>
					<div className="facts">
						<p>
							Let's get the facts straight before we start. Losing weight is
							dependent on the amount of calories you consume. If you are on a
							"diet" but you are consuming more calories than you burn you will
							NOT lose weight! The "perfect diet " is the diet you are able to
							maintain without giving up your happiness.
						</p>
						<div className="calulate">
							<h3>Let's calculate your daily calorie intake</h3>
							<form onSubmit={this.submitForm}>
								<div className="message">
									{this.state.message.message}
									<br />
								</div>
								<input
									type="number"
									placeholder="current weight"
									value={this.state.weight}
									onChange={this.handleWeightChange}
								/>
								<br />
								<button> Next </button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoseWeight;
