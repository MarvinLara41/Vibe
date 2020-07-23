import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { workoutSave } from '../../actions/workoutActions';

function AddWorkOut(props) {
	const dispatch = useDispatch();

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	// const workoutSave = useSelector((state) => state.workoutSave);
	// const {
	// 	loading: loadingSave,
	// 	success: successSave,
	// 	error: errorSave,
	// } = workoutSave;

	const [id, setId] = useState('');
	const [exercise, setExercise] = useState('');
	const [reps, setReps] = useState('');
	const [sets, setSets] = useState('');
	const [weight, setWeight] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');

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
		props.history.push('/profile');
	};

	return (
		<div className="profile-container">
			<div className="profile-box">
				<div className="profile-add-workout-box">
					<form onSubmit={submitHandler}>
						<ul>
							<h3> Add a Workout </h3>
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
