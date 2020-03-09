import React, { Component } from 'react';

export default class ToDoWork extends Component {
	render() {
		const { title, handleDelete, handleEdit } = this.props;
		return (
			<il className="list-group-item text capitalize d-flex justify-content-between my-2">
				<h6>{title}</h6>
				<div className="todo-icon">
					<span className="mx-2 text-success" onClick={handleEdit}>
						<i className="fas fa-pen"></i>
						<span className="mx-2 text-danger" onClick={handleDelete}>
							<i className="fas fa-trash"></i>
						</span>
					</span>
				</div>
			</il>
		);
	}
}
