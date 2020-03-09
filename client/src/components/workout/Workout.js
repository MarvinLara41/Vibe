import React, { Component } from 'react';
import './workout.css';
import Navbar from '../navbar/Navbar';
import AddWorkOut from './addWorkOut/AddWorkOut';
import OutPutWork from './outPutWork/OutPutWork';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../utils/API';
import { v4 as uuidv4 } from 'uuid';

class Workout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			workOuts: [],
			workOut: {
				date: '',
				exercise: '',
				sets: '',
				reps: '',
				weight: '',
				message: {},
				id: uuidv4()
			},
			editWorkOut: false
		};
	}

	handleChangeDate = e => {
		this.setState({
			workOut: {
				date: e.target.value
			}
		});
	};

	handleChangeExercise = e => {
		this.setState({
			workOut: {
				exercise: e.target.value
			}
		});
	};

	handleChangeSets = e => {
		this.setState({
			workOut: {
				sets: e.target.value
			}
		});
	};

	handleChangeReps = e => {
		this.setState({
			workOut: {
				reps: e.target.value
			}
		});
	};

	handleChangeWeight = e => {
		this.setState({
			workOut: {
				weight: e.target.value
			}
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		const workOutId = {
			id: this.state.id,
			dateTitle: this.state.date,
			exerciseTitle: this.state.exercise,
			setsTitle: this.state.sets,
			repsTitle: this.state.reps,
			weightTitle: this.state.weight
		};

		const upDatedWorkOut = [...this.state.workOuts, workOutId];

		this.setState({
			workOuts: upDatedWorkOut,
			workOut: {},
			id: uuidv4(),
			editWorkOut: false
		});
	};

	clearWorkOuts = () => {
		this.setState({
			workOuts: []
		});
	};

	handleDelete = id => {
		const filterDate = this.state.workOuts.filter(date => date.id !== id);

		const filterExercise = this.state.workOuts.filter(
			exercise => exercise.id !== id
		);

		const filterSets = this.state.sets.filter(sets => sets.id !== id);

		const filterReps = this.state.reps.filter(reps => reps.id !== id);

		const filterWeight = this.state.weight.filter(weight => weight.id !== id);

		this.setState({
			workOuts: {
				filterDate,
				filterExercise,
				filterReps,
				filterSets,
				filterWeight
			}
		});
	};

	handleEdit = id => {
		const filterDate = this.state.workOuts.filter(date => date.id !== id);

		const filterExercise = this.state.workOuts.filter(
			exercise => exercise.id !== id
		);

		const filterSets = this.state.sets.filter(sets => sets.id !== id);

		const filterReps = this.state.reps.filter(reps => reps.id !== id);

		const filterWeight = this.state.weight.filter(weight => weight.id !== id);

		this.setState({
			workOuts: {
				filterDate,
				filterExercise,
				filterReps,
				filterSets,
				filterWeight
			}
		});

		const selectedDate = this.state.workOuts.find(date => date.id === id);

		const selectedExercise = this.state.workOuts.find(
			exercise => exercise.id === id
		);

		const selectedSets = this.state.workOuts.find(sets => sets.id === id);

		const selectedWeight = this.state.workOuts.find(weight => weight.id === id);

		const selectedReps = this.state.workOuts.find(reps => reps.id === id);

		this.setState({
			workOuts: {
				filterDate,
				filterExercise,
				filterReps,
				filterSets,
				filterWeight
			},
			workOut: {
				selectedDate,
				selectedExercise,
				selectedReps,
				selectedSets,
				selectedWeight
			},
			editWorkOut: true,
			id: id
		});
	};

	render() {
		return (
			<div className="main">
				<h3>Workout page</h3>
				<div className="nav">
					<Navbar />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md mt-4">
							<h4>WorkOut Log</h4>
							<AddWorkOut
								date={this.state.workOut.date || ''}
								exercise={this.state.workOut.exercise}
								sets={this.state.workOut.sets}
								reps={this.state.workOut.reps}
								weight={this.state.workOut.weight}
								handleSubmit={this.handleSubmit}
								editWorkOut={this.state.editWorkOut}
								handleChangeDate={this.handleChangeDate}
								handleChangeExercise={this.handleChangeExercise}
								handleChangeSets={this.handleChangeSets}
								handleChangeReps={this.handleChangeReps}
								handleChangeWeight={this.handleChangeWeight}
							/>
							<OutPutWork
								workOuts={this.state.workOuts}
								clearWorkOuts={this.clearWorkOuts}
								handleDelete={this.handleDelete}
								handleEdit={this.handleEdit}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Workout;
