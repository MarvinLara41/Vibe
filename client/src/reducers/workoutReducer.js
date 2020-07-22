import {
	WORKOUT_SAVE_REQUEST,
	WORKOUT_SAVE_SUCCESS,
	WORKOUT_SAVE_FAIL,
	WORKOUT_LIST_REQUEST,
	WORKOUT_LIST_SUCCESS,
	WORKOUT_LIST_FAIL,
	WORKOUT_PERSONAL_LIST_REQUEST,
	WORKOUT_PERSONAL_LIST_SUCCESS,
	WORKOUT_PERSONAL_LIST_FAIL,
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

function workoutListReducer(state = { workouts: [] }, action) {
	switch (action.type) {
		case WORKOUT_LIST_REQUEST:
			return { loading: true, workouts: [] };
		case WORKOUT_LIST_SUCCESS:
			return { loading: false, workouts: action.payload };
		case WORKOUT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
}

function workoutPersonalListReducer(
	state = {
		workouts: [],
	},
	action
) {
	switch (action.type) {
		case WORKOUT_PERSONAL_LIST_REQUEST:
			return { loading: true };
		case WORKOUT_PERSONAL_LIST_SUCCESS:
			return { loading: false, workouts: action.payload };
		case WORKOUT_PERSONAL_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
}

export { workoutSaveReducer, workoutListReducer, workoutPersonalListReducer };
