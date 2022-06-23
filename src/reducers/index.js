import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

const authReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        case GOOGLE_SIGN_IN:
            return {...prevState, isSignedIn: true, userId: action.payload.userId};
        case GOOGLE_SIGN_OUT:
            return {...prevState, isSignedIn: false, userId: null};
        default:
            return prevState;
    }
}

export default combineReducers({
    auth: authReducer,
    form: formReducer
});