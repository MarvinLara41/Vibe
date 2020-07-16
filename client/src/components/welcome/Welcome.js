import React, { useState } from 'react';
import './welcome.css';
import API from '../../utils/API';
import auth from '../auth.js';
import SignUp from './register/signUp';
// import { withRouter } from 'react-router-dom';

function Welcome(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [register, setRegister] = useState(false);

	const submitForm = (e) => {
		e.preventDefault();
		API.sign_In((cb) => {
			if (cb.data.success) {
				auth.login(() => {
					props.history.push('/goals');
				});
			} else {
				console.log('data error');
			}
		});
	};

	const submitFormSignUp = (e) => {
		e.preventDefault();
		setRegister(true);
	};

	if (register === true) {
		return <SignUp />;
	}
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
					<h5>The simple weight lifting app tracker.</h5>
				</div>
			</div>
			<div className="box">
				<div className="signUp">
					<h2> Sign Up </h2>
					<button onClick={submitFormSignUp}>Click Here</button>
				</div>

				<div className="signIn">
					<form onSubmit={submitForm}>
						<div className="message">
							<br />
						</div>
						<h2> Sign In </h2>
						<input
							placeholder="Email"
							type="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<br />
						<input
							placeholder="Password"
							type="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<br />
						<button type="submit">Log In </button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
