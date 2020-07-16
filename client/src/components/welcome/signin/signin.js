import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../../actions/userActions';

function SignIn(props) {
	const userSignin = useSelector((state) => state.userSignin);
	const { loading, userInfo, error } = userSignin;
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const redirect = props.location.search
		? props.location.search.split('=')[1]
		: '/';

	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
		return () => {};
	}, [userInfo]);

	const backBtn = (e) => {
		props.history.push('/');
	};

	const signinBtn = (e) => {
		e.preventdefault();
		dispatch(signin(email, password));
	};

	return (
		<div className="signin-container">
			<div className="signin-box">
				<h4>Welcome, please Sign-In</h4>
				<div className="signin-backBtn">
					<button onClick={backBtn}> Back </button>
				</div>
				<form onSubmit={signinBtn}>
					<ul>
						<li>
							<input
								type="email"
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</li>
						<li>
							<input
								type="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</li>
						<button> Sign In </button>
					</ul>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
