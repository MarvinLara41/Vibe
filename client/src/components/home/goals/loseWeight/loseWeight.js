import React, { Component } from 'react';
import NavBar from '../../../navbar/Navbar';

import './loseWeight.css';

class LoseWeight extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weight: []
		};

		this.handleWeightChange = this.handleWeightChange.bind(this);
		this.submitWeight = this.submitWeight.bind(this);
	}

	handleWeightChange(e) {
		this.setState({
			weight: e.target.value
		});
	}

	async submitWeight(e) {
		e.preventDefault();
		this.setState({ weight: e.target.value });
		if (this.state.weight > 100) {
			return (
				<div>
					<p>
						Here is your daily calorie intake you must not consume more than
						these amount of calories daily in order for your body to start
						losing weight
					</p>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="loseWeight">
				<NavBar />
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
							<form onSubmit={this.submitWeight}>
								<input
									type="number"
									placeholder="input your current weight here"
									value={this.state.weight}
									onChange={this.handleWeightChange}
								/>
								<br />
								<button>Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoseWeight;
