import React, { useState } from 'react';
import API from '../../utils/API';
import auth from '../auth.js';
import Register from './register/register';
// import { withRouter } from 'react-router-dom';

function Welcome(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const registerBtn = (e) => {
		props.history.push('/register');
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

					<button type="submit" className="welcome-signin">
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
