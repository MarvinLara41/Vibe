import React, { useState } from 'react';
import API from '../../utils/API';
import auth from '../auth.js';
import SignUp from './register/signUp';
// import { withRouter } from 'react-router-dom';

function Welcome(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [register, setRegister] = useState(false);

	const registerBtn = (e) => {
		props.history.push('/register');
	};

	return (
		<div className="welcome-container">
			<div className="welcome-gif">
				<p>
					<b>LightW8</b>
				</p>
				<div className="welcome-logon">
					<button
						type="submit"
						onChange={(e) => setRegister(true)}
						className="welcome-register"
						onClick={registerBtn}
						value={register}
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
