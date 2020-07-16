import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Goals from './components/home/Goals';
import ProtectRoute from './components/protectedRoute.js';
import WorkOut from './components/workout/WorkOut.js';
import SignUp from './components/welcome/register/signUp';
import Progress from './components/progress/Progress';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Welcome} />
					<ProtectRoute exact path="/goals" component={Goals} />
					{/* <Route exact path="register" component={SignUp} />
					<ProtectRoute exact path="/addworkout" component={WorkOut} />
					<ProtectRoute exact path="/progress" component={Progress} /> */}
					<Route path="*" component={() => '404 NOT FOUND'} />
				</Switch>
			</div>
		</Router>
	);
}

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
