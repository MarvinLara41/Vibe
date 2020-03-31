import React, { Component } from 'react';
import API from '../../../utils/API';

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
			password2: '',
			userId: '',
			email: '',
			message: ''
		};
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleChangePassword2 = this.handleChangePassword2.bind(this);
		this.handleChangeUserId = this.handleChangeUserId.bind(this);
		this.submitFormRegister = this.submitFormRegister.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
	}

	handleChangePassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	handleChangePassword2(e) {
		this.setState({
			password2: e.target.value
		});
	}

	handleChangeUserId(e) {
		this.setState({
			userId: e.target.value
		});
	}

	handleChangeEmail(e) {
		this.setState({
			email: e.target.value
		});
	}

	submitFormRegister(e) {
		e.preventDefault();

		API.sign_Up(this.state, callback => {
			console.log(callback.data);
		});

		// if (this.state.password !== this.state.password2) {
		// 	this.setState({
		// 		message: 'Passwords must be the same'
		// 	});
		// }
	}

	render() {
		return (
			<div>
				<h3> Register your account Info</h3>
				<div>
					<form onSubmit={this.submitFormRegister}>
						<div>{this.state.message}</div>
						<br />
						<input
							placeholder="Email"
							onChange={this.handleChangeEmail}
							value={this.state.email}
						/>
						<br />
						<input
							placeholder="User Name"
							onChange={this.handleChangeUserId}
							value={this.state.userId}
						/>
						<br />
						<input
							placeholder="Password"
							onChange={this.handleChangePassword}
							value={this.state.password}
						/>
						<br />
						{/* <input
							placeholder="Reconfirm Password"
							onChange={this.handleChangePassword2}
							value={this.state.password2}
						/> */}
						<br />
						<button type="submit">Sign Up</button>
					</form>
				</div>
			</div>
		);
	}
}
