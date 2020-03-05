import React, { Component } from 'react';
import './workout.css';
import Navbar from '../navbar/Navbar';
import AddWorkOut from './addWorkOut/AddWorkOut';
import OutPutWork from './outPutWork/OutPutWork';
import API from '../../utils/API';
import { v4 as uuidv4 } from 'uuid';

class Workout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: '',
			exercise: '',
			sets: '',
			reps: '',
			weight: '',
			message: {},
			editWorkOut: false
		};
	}

	render() {
		return (
			<div className="main">
				<h3>Workout page</h3>
				<div className="nav">
					<Navbar />
				</div>

				<div>
					<AddWorkOut />
					<OutPutWork />
				</div>
			</div>
		);
	}
}

export default Workout;
