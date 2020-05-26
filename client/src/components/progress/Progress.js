import React, { Component } from 'react';
import NavBar from '../navbar/Navbar';
import './progress.css';
export default class Progress extends Component {
	render() {
		return (
			<div className="container">
				<NavBar className="progressNav" />
				<thread className="table">
					<tr>
						<th>Weight</th>
						<th>Date</th>
					</tr>
					<tbody>
						<tr>
							<td>1</td>
							<td> mark</td>
						</tr>
					</tbody>
				</thread>
			</div>
		);
	}
}
