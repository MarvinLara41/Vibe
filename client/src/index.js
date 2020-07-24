import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import {
	Switch,
	Route,
	BrowserRouter as Router,
	withRouter,
} from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Register from './components/register/register';
import Signin from './components/signin/signin';
import Profile from './components/profile/profile';
import AddWorkOut from './components/addWorkOut/addWorkOut';
import UserInfo from './components/userInfo/userInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route path="/register" component={Register} />
					<Route path="/signin" component={Signin} />
					<Route path="/profile" component={Profile} />
					<Route path="/update" component={UserInfo} />
					<Route path="/addworkout" component={AddWorkOut} />
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
