import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import streamsReducer from "./streamsReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamsReducer,
    modal: modalReducer
});