import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';
import './progress.css';
export default class Progress extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<NavBar className="progressNav" />
				<thread className="table">
					<tr>
						<th>Date</th>
						<th>Exercise</th>
						<th>Sets</th>
						<th>Repitions</th>
						<th>Weight</th>
					</tr>
					<tbody>
						<tr>
							<td></td>
							<td> </td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</thread>
			</div>
		);
	}
}
