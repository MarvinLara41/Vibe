import React, { Component } from 'react';
import API from '../../../utils/API';
import Welcome from './../Welcome';
import './signUp.css';

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
			recheckPassword: '',
			userId: '',
			email: '',
			message: '',
			home: false,
		};
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleChangerecheckPassword = this.handleChangerecheckPassword.bind(
			this
		);
		this.handleChangeUserId = this.handleChangeUserId.bind(this);
		this.submitFormRegister = this.submitFormRegister.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangerecheckPassword = this.handleChangerecheckPassword.bind(
			this
		);
		this.handleHome = this.handleHome.bind(this);
	}

	handleChangePassword(e) {
		this.setState({
			password: e.target.value,
		});
	}

	handleChangerecheckPassword(e) {
		this.setState({
			recheckPassword: e.target.value,
		});
	}

	handleChangeUserId(e) {
		this.setState({
			userId: e.target.value,
		});
	}

	handleChangeEmail(e) {
		this.setState({
			email: e.target.value,
		});
	}

	submitFormRegister(e) {
		e.preventDefault();
		API.sign_Up(this.state, (callback) => {
			console.log(callback);
			this.setState({ message: callback.data });
			if (callback.data.success) {
				window.location.assign('/');
			}
		});
	}

	handleHome(e) {
		e.preventDefault();

		this.setState({
			home: true,
		});
	}
	render() {
		if (this.state.home === true) {
			return <Welcome />;
		}
		return (
			<div className="box-signUp">
				<div className="box">
					<h3> Register your account Info</h3>
					<div className="signUp-home">
						<button className="mainPage" onClick={this.handleHome}>
							Main Page
						</button>
					</div>

					<form onSubmit={this.submitFormRegister} className="form-SignUp">
						<div>{this.state.message.message}</div>
						<br />
						<input
							placeholder="Email"
							onChange={this.handleChangeEmail}
							value={this.state.email}
							type="Email"
						/>
						<br />
						<input
							placeholder="User Name"
							onChange={this.handleChangeUserId}
							value={this.state.userId}
							type="User Name"
						/>
						<br />
						<input
							placeholder="Password"
							onChange={this.handleChangePassword}
							value={this.state.password}
							type="Password"
						/>
						<br />
						<br />
						<button type="submit" className="signUp-btn">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		);
	}
}
