import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { update, logout } from '../../actions/userActions';

function UserInfo(props) {
	const dispatch = useDispatch();

	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const userUpdate = useSelector((state) => state.userUpdate);
	const { loading, success, error } = userUpdate;

	const updateHandler = (e) => {
		e.preventDefault();
		dispatch(update({ userId: userInfo._id, email, userName, password })).then(
			alert('User Info Updated.')
		);
	};

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		props.history.push('/signin');
	};

	useEffect(() => {
		if (userInfo) {
			setUserName(userInfo.userName);
			setEmail(userInfo.email);
			setPassword(userInfo.password);
		}
		return () => {};
	}, [userInfo]);

	return (
		<div className="userInfo-container">
			<div className="userInfo-box">
				<div className="profile-nav-box">
					<div className="nav-container">
						<ul>
							<li>
								<Link to="/profile"> Profile </Link>
							</li>
							<li>
								<Link to="/update"> User Info </Link>
							</li>
							<li>
								<Link to="/addworkout"> Add WorkOut </Link>
							</li>

							<li>
								<button type="button" onClick={handleLogout}>
									Logout
								</button>
							</li>
						</ul>
					</div>
				</div>

				<form onSubmit={updateHandler}>
					<h4> Update User-Info </h4>
					<ul>
						<li>
							{loading && <div> Loading.. </div>}
							{error && <div> {error}</div>}
							{success && <div> Profile Info Updated</div>}
						</li>
						<li>
							<label> Update User Name </label>{' '}
							<input
								type="username"
								name="username"
								id="userName"
								value={userName}
								placeholder="Update UserName"
								onChange={(e) => setUserName(e.target.value)}
							/>
						</li>
						<li>
							<label> Update Email </label>{' '}
							<input
								type="email"
								name="email"
								id="email"
								value={email}
								placeholder="Update Email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</li>
						<li>
							<label> Update Password </label>{' '}
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Update Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</li>
						<button type="submit">Update Info </button>
					</ul>
				</form>
			</div>
		</div>
	);
}

export default UserInfo;
