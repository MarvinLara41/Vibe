import React, { Component } from 'react';
import './welcome.css';
import API from '../../utils/API';
import auth from '../auth.js';
// import { withRouter } from 'react-router-dom';

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			message: {}
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		});
	}

	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		});
	}

	submitForm(e) {
		e.preventDefault();
		API.sign_In(this.state, cb => {
			this.setState({
				message: cb.data
			});

			if (cb.data.success) {
				auth.login(() => {
					this.props.history.push('/home');
				});
			} else {
				console.log('data error');
			}
		});
	}

	render() {
		return (
			<div className="hello">
				<div className="welcome">
					<div className="image">
						<h3>Hello, Welcome to LightW8</h3>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<h5>The simple weight lifting app tracker.</h5>
					</div>
				</div>
				<div className="box">
					<div className="signUp">
						<h2> Sign Up </h2>
						<button>Click Here</button>
					</div>

					<div className="signIn">
						<form onSubmit={this.submitForm}>
							<div className="message">
								{this.state.message.message}
								<br />
							</div>
							<h2> Sign In </h2>
							<input
								placeholder="Email"
								type="text"
								value={this.state.email}
								onChange={this.handleEmailChange}
							/>
							<br />
							<input
								placeholder="Password"
								type="text"
								value={this.state.password}
								onChange={this.handlePasswordChange}
							/>
							<br />
							<button type="submit">Log In </button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Welcome;
