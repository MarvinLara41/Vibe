import axios from 'axios';
import {
	WORKOUT_SAVE_FAIL,
	WORKOUT_SAVE_SUCCESS,
	WORKOUT_SAVE_REQUEST,
	WORKOUT_DELETE_FAIL,
	WORKOUT_DELETE_SUCCESS,
	WORKOUT_DELETE_REQUEST,
} from '../constants/workoutConstants';

const workoutSave = (workout) => async (dispatch, getState) => {
	try {
		dispatch({ type: WORKOUT_SAVE_REQUEST, payload: workout });
		const {
			userSignin: { userInfo },
		} = getState();
		if (!workout._id) {
			const { data } = await axios.post('/api/workout', workout, {
				headers: {
					Authorization: 'Bearer ' + userInfo.token,
				},
			});
			dispatch({ type: WORKOUT_SAVE_SUCCESS, payload: data });
		} else {
			const { data } = await axios.put('/api/workout/' + workout._id, workout, {
				headers: {
					Authorization: 'Bearer ' + userInfo.token,
				},
			});
			dispatch({ type: WORKOUT_SAVE_SUCCESS, payload: data });
		}
	} catch (error) {
		dispatch({ type: WORKOUT_SAVE_FAIL, payload: error.message });
	}
};

const workoutDelete = (workoutId) => async (dispatch, getState) => {
	try {
		const {
			userSignin: { userInfo },
		} = getState();
		dispatch({ type: WORKOUT_DELETE_REQUEST, payload: workoutId });
		const { data } = await axios.delete('/api/workout/' + workoutId, {
			headers: {
				Authorization: 'Bearer ' + userInfo.token,
			},
		});
		dispatch({ type: WORKOUT_DELETE_SUCCESS, payload: data, success: true });
	} catch (error) {
		dispatch({ type: WORKOUT_DELETE_FAIL, payload: error.message });
	}
};

export { workoutSave, workoutDelete };
