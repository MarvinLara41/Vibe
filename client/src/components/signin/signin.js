import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../actions/userActions';

function SignIn(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const userSignin = useSelector((state) => state.userSignin);
	const { loading, userInfo, error } = userSignin;

	const dispatch = useDispatch();

	const redirect = props.location.search
		? props.location.search.split('=')[1]
		: '/profile';

	const backBtn = (e) => {
		e.preventDefault();

		props.history.push('/');
	};

	const signinHandler = (e) => {
		e.preventDefault();
		dispatch(signin(email, password));
	};

	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
		return () => {};
	}, [userInfo]);

	return (
		<div className="signin-container">
			<div className="signin-box">
				<h4>Welcome, please Sign-In</h4>
				<div className="signin-backBtn">
					<button onClick={backBtn}> Back </button>
				</div>
				<form onSubmit={signinHandler}>
					<ul>
						<li>
							{loading && <div> Loading... </div>}
							{error && <div> {error} </div>}
						</li>
						<li>
							<input
								type="email"
								placeholder="Email"
								id="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</li>
						<li>
							<input
								type="password"
								placeholder="Password"
								id="password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</li>
						<button type="submit"> Sign In </button>
					</ul>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
