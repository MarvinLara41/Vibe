import React, { Component } from 'react';
import ToDoWork from '../toDoWork/toDoWork';

export default class OutPutWork extends Component {
	render() {
		const { workOuts, clearWorkOuts, handleDelete, handleEdit } = this.props;

		return (
			<ul className="list-group-5">
				<h3>WorkOuts Completed</h3>

				{workOuts &&
					workOuts.map(workOut => {
						return (
							<ToDoWork
								key={workOut.id}
								title={workOut.title}
								exerciseTitle={workOut.exerciseTitle}
								setsTitle={workOut.setsTitle}
								repsTitle={workOut.repsTitle}
								weightTitle={workOut.weightTitle}
								handleDelete={() => handleDelete(workOut.id)}
								handleEdit={() => handleEdit(workOut.id)}
							/>
						);
					})}
				<button
					type="button"
					className="btn btn-danger btn-block text-capitalize mt-5"
					onClick={clearWorkOuts}
				>
					Clear WorkOut
				</button>
			</ul>
		);
	}
}
