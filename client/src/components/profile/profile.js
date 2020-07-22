import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../navigation/nav';
import {
	workoutSave,
	workoutDelete,
	listMyPersonalWorkOuts,
} from '../../actions/workoutActions';

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
		dispatch(workoutDelete(workout._id));
	};

	useEffect(() => {
		if (userInfo) {
			console.log(userInfo.email);
		}
		dispatch(listMyPersonalWorkOuts());
		return () => {};
	}, [userInfo]);

	return (
		<div className="profile-workout-list">
			<div className="profile-nav-box">
				<Nav />
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
								<td>{workout._id}</td>
								<td>{workout.reps}</td>
								<td>{workout.sets}</td>
								<td>{workout.weight}</td>
								<td>{workout.date}</td>
								<td>{workout.time}</td>
								<td>
									<button onClick={() => deleteHandler(workout)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default Profile;
