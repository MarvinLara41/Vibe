import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	workoutDelete,
	listMyPersonalWorkOuts,
} from '../../actions/workoutActions';
import { update, logout } from '../../actions/userActions';

function Profile(props) {
	const dispatch = useDispatch();

	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const workoutPersonalList = useSelector((state) => state.workoutPersonalList);
	const {
		loading: loadingWorkouts,
		workouts,
		error: errorWorkouts,
	} = workoutPersonalList;

	const userUpdate = useSelector((state) => state.userUpdate);
	const { loading, success, error } = userUpdate;

	const deleteHandler = (workout) => {
		dispatch(workoutDelete(workout._id));
	};

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		props.history.push('/signin');
	};

	const updateHandler = (e) => {
		e.preventDefault();
		dispatch(update({ userId: userInfo._id, email, userName, password }));
	};

	useEffect(() => {
		if (userInfo) {
			setUserName(userInfo.userName);
			setEmail(userInfo.email);
			setPassword(userInfo.password);
		}
		dispatch(listMyPersonalWorkOuts());
		return () => {};
	}, [userInfo]);

	return (
		<div>
			<div>
				<h4> Welcome, {userInfo.userName}</h4>

				<div className="profile-update-form">
					<form onSubmit={updateHandler}>
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

			<div className="profile-workout-list">
				<div className="profile-nav-box">
					<div className="nav-container">
						<div className="nav-box">
							<ul>
								<li>
									<Link to="/profile"> Profile </Link>
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
				</div>

				{loadingWorkouts ? (
					<div>Loading...</div>
				) : errorWorkouts ? (
					<div>{errorWorkouts} </div>
				) : (
					<table className="table">
						<thead>
							<tr>
								<th>Exercise </th>
								<th> Reps </th>
								<th>Sets</th>
								<th> Weight</th>
								<th>Date</th>
								<th>Time </th>
							</tr>
						</thead>
						<tbody>
							{workouts.map((workout) => (
								<tr key={workout._id}>
									<td> {workout._id} </td>
									<td>{workout.exercise}</td>
									<td>{workout.reps}</td>
									<td>{workout.sets}</td>
									<td>{workout.weight}</td>
									<td>{workout.date}</td>
									<td>{workout.time}</td>
									<td>
										<button onClick={() => deleteHandler(workout)}>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}

export default Profile;
