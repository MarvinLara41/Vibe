import React, { useState, useEffect } from 'react';
import { register } from '../../../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

function Register(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');
	const userRegister = useSelector((state) => state.userRegister);
	const { loading, userInfo, error } = userRegister;
	const dispatch = useDispatch();

	const submitFormRegister = (e) => {
		e.preventDefault();
		dispatch(register(userName, email, password));
	};

	const welcomeBtn = (e) => {
		e.preventDefault();

		props.history.push('/');
	};

	useEffect(() => {
		if (userInfo) {
			props.history.push('/profile');
		}
		return () => {};
	}, [userInfo]);

	return (
		<div className="register-container">
			<div className="register-box">
				<div className="register-backBtn">
					<button onClick={welcomeBtn}>Back</button>
				</div>
				<form onSubmit={submitFormRegister}>
					<h4> Sign-Up </h4>
					<br />
					<ul>
						<li>
							{loading && <div> Loading... </div>}
							{error && <div> {error}</div>}
						</li>
						<li>
							<label> Enter User Name </label>{' '}
							<input
								type="username"
								name="username"
								id="userName"
								value={userName}
								placeholder="Enter UserName"
								onChange={(e) => setUserName(e.target.value)}
							/>
						</li>
						<li>
							<label> Enter Email </label>{' '}
							<input
								type="email"
								name="email"
								id="email"
								value={email}
								placeholder="Enter Email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</li>
						<li>
							<label> Enter Password </label>{' '}
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</li>{' '}
						<button type="submit">Sign-Up</button>
					</ul>
				</form>
			</div>
		</div>
	);
}
export default Register;
