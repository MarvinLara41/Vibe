import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Register from './components/welcome/register/register';
import Signin from './components/welcome/signin/signin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Welcome} />
					{/* <ProtectRoute exact path="/goals" component={Goals} /> */}
					<Route exact path="/register" component={Register} />
					<Route path="/signin" component={Signin} />
					{/* <ProtectRoute exact path="/addworkout" component={WorkOut} />
					<ProtectRoute exact path="/progress" component={Progress} /> */}
					<Route path="*" component={() => '404 NOT FOUND'} />
				</Switch>
			</div>
		</Router>
	);
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
