import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../navigation/nav';
import {
	workoutSave,
	workoutDelete,
	workoutPersonalList,
} from '../../actions/workoutActions';

function AddWorkOut(props) {
	const dispatch = useDispatch();

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const [id, setId] = useState('');
	const [exercise, setExercise] = useState('');
	const [reps, setReps] = useState('');
	const [sets, setSets] = useState('');
	const [weight, setWeight] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');

	// const saveWorkOut = useSelector((state) => state.saveWorkOut);
	// const {
	// 	loading: loadingSave,
	// 	success: successSave,
	// 	error: errorSave,
	// } = saveWorkOut;

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
									type="number"
									name="repititions"
									onChange={(e) => setReps(e.target.value)}
									value={reps}
									placeholder="Repetitions"
								/>
							</li>
							<li>
								<input
									type="number"
									name="sets"
									onChange={(e) => setSets(e.target.value)}
									value={sets}
									placeholder="Sets"
								/>
							</li>
							<li>
								<input
									type="number"
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
			</div>
		</div>
	);
}

export default AddWorkOut;
