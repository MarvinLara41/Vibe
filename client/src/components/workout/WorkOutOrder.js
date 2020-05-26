import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import WorkOut from './Workout';
import './workoutorder.css';
export default class WorkOutOrder extends Component {
	render() {
		return (
			<div className="workOutOrder">
				<Navbar className="workOutNav" />
				<div>{/* <p> Display Workouts Here</p> */}</div>
			</div>
		);
	}
}
