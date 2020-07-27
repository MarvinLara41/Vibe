import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveWorkOut } from '../../actions/workoutActions';
import { logout } from '../../actions/userActions';
import { Link } from 'react-router-dom';

function AddWorkOut(props) {
	const dispatch = useDispatch();

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const workoutSave = useSelector((state) => state.workoutSave);
	const {
		loading: loadingSave,
		success: successSave,
		error: errorSave,
	} = workoutSave;

	const [id, setId] = useState('');
	const [exercise, setExercise] = useState('');
	const [reps, setReps] = useState('');
	const [sets, setSets] = useState('');
	const [weight, setWeight] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		props.history.push('/signin');
	};

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(
			saveWorkOut({
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
		<div className="add-workout-container">
			<div className="add-workout-box">
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

				<div className="profile-add-workout-box">
					<form onSubmit={submitHandler}>
						{loadingSave ? (
							<div>Loading WorkOut Log...</div>
						) : errorSave ? (
							<div> {errorSave} </div>
						) : successSave ? (
							<div>WorkOut Successfully Saved. </div>
						) : (
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
						)}
					</form>
				</div>
			</div>
		</div>
	);
}

export default AddWorkOut;
