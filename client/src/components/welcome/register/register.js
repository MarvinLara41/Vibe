import React, { useState } from 'react';

function Register(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');

	// submitFormRegister(e) {
	// 	e.preventDefault();
	// 	API.sign_Up(this.state, (callback) => {
	// 		console.log(callback);
	// 		this.setState({ message: callback.data });
	// 		if (callback.data.success) {
	// 			window.location.assign('/');
	// 		}
	// 	});
	// }
	const submitFormRegister = (e) => {
		e.preventDefault();
		console.log('submit Register');
	};

	const welcomeBtn = (e) => {
		props.history.push('/');
	};

	return (
		<div className="register-container">
			<div className="register-box">
				<div className="register-backBtn">
					<button onClick={welcomeBtn}>Back</button>
				</div>
				<form onClick={submitFormRegister}>
					<h4> Sign-Up </h4>
					<br />
					<ul>
						<li>
							<label> Enter User Name </label>{' '}
							<input
								type="username"
								value={userName}
								name="username"
								placeholder="Enter UserName"
								onChange={(e) => setUserName(e.target.value)}
							/>
						</li>
						<li>
							<label> Enter Email </label>{' '}
							<input
								type="email"
								value={email}
								name="email"
								placeholder="Enter Email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</li>
						<li>
							<label> Enter Password </label>{' '}
							<input
								type="password"
								value={password}
								name="password"
								placeholder="Enter Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</li>{' '}
						<button>Sign-Up</button>
					</ul>
				</form>
			</div>
		</div>
	);
}
export default Register;
