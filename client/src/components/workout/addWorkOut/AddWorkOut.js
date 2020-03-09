import React, { Component } from 'react';

export default class AddWorkOut extends Component {
	render() {
		const {
			date,
			exercise,
			sets,
			reps,
			weight,
			handleChangeDate,
			handleChangeExercise,
			handleChangeSets,
			handleChangeReps,
			handleChangeWeight,
			editWorkOut,
			handleSubmit
		} = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book"></i>
							</div>
							<input
								type="text"
								className="form-control"
								placeholder="Date"
								value={date}
								onChange={handleChangeDate}
							/>
							<br />
							<input
								type="text"
								className="form-control"
								placeholder="Exercise"
								value={exercise}
								onChange={handleChangeExercise}
							/>
							<br />
							<input
								type="text"
								className="form-control"
								placeholder="Sets"
								value={sets}
								onChange={handleChangeSets}
							/>
							<br />
							<input
								type="text"
								className="form-control"
								placeholder="Repetitions"
								value={reps}
								onChange={handleChangeReps}
							/>
							<br />
							<input
								type="text"
								className="form-control"
								placeholder="Weight"
								value={weight}
								onChange={handleChangeWeight}
							/>
						</div>
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
		);
	}
}
