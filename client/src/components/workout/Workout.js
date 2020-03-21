import React, { Component } from 'react';
import './workout.css';
import Navbar from '../navbar/Navbar';
import AddWorkOut from './addWorkOut/AddWorkOut';
import OutPutWork from './outPutWork/OutPutWork';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../utils/API';
import { v4 as uuidv4 } from 'uuid';

class Workout extends Component {
	state = {
		workOuts: [],
		date: '',
		exercise: '',
		sets: '',
		reps: '',
		weight: '',
		message: {},
		id: uuidv4(),
		editWorkOut: false
	};

	handleChange = e => {
		this.setState({
			date: e.target.value
		});
	};

	handleChangeexercise = e => {
		this.setState({
			exercise: e.target.value
		});
	};

	handleChangeeets = e => {
		let sets = e.target.value;

		this.setState({
			sets
		});
	};

	handleChangereps = e => {
		let reps = e.target.value;

		this.setState({
			reps
		});
	};

	handleChangeweight = e => {
		let weight = e.target.value;
		this.setState({
			weight
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		let workOutId = {
			id: this.state.id,
			title: this.state.date,
			exerciseTitle: this.state.exercise
			// setsTitle: this.state.sets,
			// repsTitle: this.state.reps,
			// weightTitle: this.state.weight
		};

		const upDatedWorkOut = [...this.state.workOuts, workOutId];

		console.log(workOutId);

		this.setState({
			workOuts: upDatedWorkOut,
			date: '',
			exercise: '',
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
								date={this.state.date}
								exercise={this.state.exercise}
								// sets={this.state.sets}
								// reps={this.state.reps}
								// weight={this.state.weight}
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
								editWorkOut={this.state.editWorkOut}
								// handleChangeDate={this.handleChange}
								handleChangeExercise={this.handleChangeexercise}
								// handleChangeSets={this.handleChangesets}
								// handleChangeReps={this.handleChangereps}
								// handleChangeWeight={this.handleChangeweight}
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
