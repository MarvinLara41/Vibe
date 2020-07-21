import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../navigation/nav';
import { workoutSave, workoutDelete } from '../../actions/workoutActions';

function Profile(props) {
	const dispatch = useDispatch();

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	// const saveWorkOut = useSelector((state) => state.saveWorkOut);
	// const {
	// 	loading: loadingSave,
	// 	success: successSave,
	// 	error: errorSave,
	// } = saveWorkOut;

	const [id, setId] = useState('');
	const [exercise, setExercise] = useState('');
	const [reps, setReps] = useState('');
	const [sets, setSets] = useState('');
	const [weight, setWeight] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');

	const workoutList = useSelector((state) => state.workoutList);
	const { loading, workouts, error } = workoutList;

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(
			workoutSave({
				_id: id,
				exercise,
				reps,
				sets,
				weight,
				date,
				time,
			})
		);
	};

	const deleteHandler = (workout) => {
		dispatch(workoutDelete(workout._id));
	};

	useEffect(() => {
		if (userInfo) {
			console.log(userInfo.email);
		}
		dispatch(workoutList());
		return () => {};
	}, []);

	return (
		<div className="profile-container">
			<div className="profile-box">
				<div className="profile-nav-box">
					<Nav />
				</div>
				<div className="profile-add-workout-box">
					<form onSubmit={submitHandler}>
						<ul>
							<h5> Add a workout</h5>
							<li>
								<input
									type="text"
									name="exercise"
									onChange={(e) => setExercise(e.target.value)}
									value={exercise}
									placeholder="Excerise"
								/>
							</li>
							<li>
								<input
									type="text"
									name="exercise"
									onChange={(e) => setReps(e.target.value)}
									value={reps}
									placeholder="Repetitions"
								/>
							</li>
							<li>
								<input
									type="text"
									name="exercise"
									onChange={(e) => setSets(e.target.value)}
									value={sets}
									placeholder="Sets"
								/>
							</li>
							<li>
								<input
									type="text"
									name="weight"
									onChange={(e) => setWeight(e.target.value)}
									value={weight}
									placeholder="Weight"
								/>
							</li>
							<li>
								<input
									type="text"
									name="exercise"
									onChange={(e) => setDate(e.target.value)}
									value={date}
									placeholder="Date"
								/>
							</li>
							<li>
								<input
									type="text"
									name="exercise"
									onChange={(e) => setTime(e.target.value)}
									value={time}
									placeholder="Time Duration"
								/>
							</li>
							<button type="submit">Submit</button>
						</ul>
					</form>
				</div>
				<div className="workout-list">
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
										<button onClick={() => deleteHandler(workout)}>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Profile;
