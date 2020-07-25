import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	deleteWorkOut,
	listMyPersonalWorkOuts,
} from '../../actions/workoutActions';
import { logout } from '../../actions/userActions';

function Profile(props) {
	const dispatch = useDispatch();

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const workoutPersonalList = useSelector((state) => state.workoutPersonalList);
	const {
		loading: loadingWorkouts,
		workouts,
		error: errorWorkouts,
	} = workoutPersonalList;

	const deleteHandler = (workout) => {
		dispatch(deleteWorkOut(workout._id)).then(window.location.reload());
	};

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		props.history.push('/signin');
	};

	useEffect(() => {
		dispatch(listMyPersonalWorkOuts());
		return () => {};
	}, [userInfo]);

	return (
		<div className="profile-container">
			<div className="profile-box">
				<div className="profile-nav-box">
					<div className="nav-container">
						<ul>
							<li>
								<Link to="/profile"> Profile </Link>
							</li>
							<li>
								<Link to="update"> User Info </Link>
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

				<div className="profile-workout-list">
					{loadingWorkouts ? (
						<div>Loading...</div>
					) : errorWorkouts ? (
						<div>{errorWorkouts} </div>
					) : (
						<div>
							<h4> Welcome, {userInfo.userName} </h4>
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
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Profile;
