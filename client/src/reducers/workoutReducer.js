import {
	WORKOUT_SAVE_REQUEST,
	WORKOUT_SAVE_SUCCESS,
	WORKOUT_SAVE_FAIL,
} from '../constants/workoutConstants';

function workoutSaveReducer(state = { workout: {} }, action) {
	switch (action.type) {
		case WORKOUT_SAVE_REQUEST:
			return { loading: true };
		case WORKOUT_SAVE_SUCCESS:
			return { loading: false, success: true, workout: action.payload };
		case WORKOUT_SAVE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
}

export { workoutSaveReducer };
