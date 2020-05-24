import axios from 'axios';

export default {
	sign_In: function (type, callback) {
		let URL = '/api/signIn/signIn'; // change to sign in

		axios
			.post(URL, {
				email: type.email, //login route
				password: type.password,
			})
			.then(function (response) {
				callback(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	},

	sign_Up: function (type, callback) {
		let URL = '/api/signUp/signUp';

		axios
			.post(URL, {
				email: type.email,
				userId: type.userId,
				password: type.password,
			})
			.then(function (response) {
				callback(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	},

	workOut: function (type, callback) {
		let URL = '/api/workout/workout';

		axios
			.post(URL, {
				date: type.date,
				exercise: type.exercise,
				sets: type.sets,
				reps: type.reps,
				weight: type.weight,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	},

	previousWorkOut: function (type, callback) {
		let URL = '/api/workout/workout';

		axios
			.get(URL, {
				data: type.date,
				exercise: type.exercise,
				sets: type.sets,
				reps: type.reps,
				weight: type.weight,
			})
			.then(function (response) {
				callback(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	},

	deleteWorkOut: function (type, callback) {
		let URL = '/api/workout/workout';

		axios
			.delete(URL, {
				date: type.date,
				exercise: type.exercise,
				sets: type.sets,
				reps: type.reps,
				weight: type.weight,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	},

	updateWorkOut: function (type, callback) {
		let URL = '/api/workout/workout';

		axios
			.put(URL, {
				date: type.date,
				exercise: type.exercise,
				sets: type.sets,
				reps: type.reps,
				weight: type.weight,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	},

	saveProgress: function (type, callback) {
		let URL = 'api/currentweight/currentweight';
		axios
			.post(URL, {
				currentWeight: type.currentWeight,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	},
};
