import React, { Component } from 'react';

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password1: '',
			password2: '',
			userId: '',
			message: ''
		};
		this.handleChangePassword1 = this.handleChangePassword1.bind(this);
		this.handleChangePassword2 = this.handleChangePassword2.bind(this);
		this.handleChangeUserId = this.handleChangeUserId.bind(this);
		this.submitFormRegister = this.submitFormRegister.bind(this);
	}

	handleChangePassword1(e) {
		this.setState({
			password1: e.target.value
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

	submitFormRegister(e) {
		e.preventDefault();

		if (this.state.password1 !== this.state.password2) {
			this.setState({
				message: 'Passwords must be the same'
			});
		}
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
							placeholder="User Name"
							onChange={this.handleChangeUserId}
							value={this.state.userId}
						/>
						<br />
						<input
							placeholder="Password"
							onChange={this.handleChangePassword1}
							value={this.state.password1}
						/>
						<br />
						<input
							placeholder="Reconfirm Password"
							onChange={this.handleChangePassword2}
							value={this.state.password2}
						/>
						<br />
						<button type="submit">Sign Up</button>
					</form>
				</div>
			</div>
		);
	}
}
