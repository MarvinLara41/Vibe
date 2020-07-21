import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

function Nav(props) {
	const dispatch = useDispatch();

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		props.history.push('/signin');
	};
	return (
		<div className="nav-container">
			<div className="nav-box">
				<ul>
					<li>
						<button type="button" onClick={handleLogout}>
							Logout
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
