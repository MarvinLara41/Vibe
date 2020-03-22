import React, { Component } from 'react';

export default class AddWorkOut extends Component {
	render() {
		const {
			date,
			handleChange,
			exercise,
			sets,
			reps,
			weight,
			handleChangeExercise,
			handleChangeSets,
			handleChangeReps,
			handleChangeWeight,
			editWorkOut,
			handleSubmit
		} = this.props;
		return (
			<div>
				<div className="card card-body my-3">
					<form onSubmit={handleSubmit}>
						<div className="input-group">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book"></i>
							</div>

							<input
								name="date"
								type="text"
								className="form-control"
								placeholder="Date"
								value={date}
								onChange={handleChange}
							/>

							<input
								name="exercise"
								type="text"
								className="form-control"
								placeholder="Exercise"
								value={exercise}
								onChange={handleChangeExercise}
							/>

							<input
								name="sets"
								type="number"
								className="form-control"
								placeholder="Sets"
								value={sets}
								onChange={handleChangeSets}
							/>

							<input
								name="reps"
								type="number"
								className="form-control"
								placeholder="Repitions"
								value={reps}
								onChange={handleChangeReps}
							/>

							<input
								name="weight"
								type="number"
								className="form-control"
								placeholder="Weight"
								value={weight}
								onChange={handleChangeWeight}
							/>
						</div>

						<button
							type="submit"
							className={
								editWorkOut
									? 'btn btn-block btn-success mt-3'
									: 'btn btn-block btn-primary mt-3'
							}
						>
							{editWorkOut ? 'Edit WorkOut' : 'Add WorkOut'}
						</button>
					</form>
				</div>
			</div>
		);
	}
}
