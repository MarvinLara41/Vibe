import React, { useState } from 'react';
import Register from './register/register';

function Welcome(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const registerBtn = (e) => {
		props.history.push('/register');
	};

	const signinBtn = (e) => {
		props.history.push('/signin');
	};

	return (
		<div className="welcome-container">
			<div className="welcome-gif">
				<p>
					<b>
						<div className="welcome-logo">L</div>i
						<div className="welcome-logo">g</div>h
						<div className="welcome-logo">t</div>W
						<div className="welcome-logo">8</div>
					</b>
				</p>
				<div className="welcome-logon">
					<button
						type="submit"
						className="welcome-register"
						onClick={registerBtn}
					>
						Register
					</button>

					<button type="submit" onClick={signinBtn} className="welcome-signin">
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
