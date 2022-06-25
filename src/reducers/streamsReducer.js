import _ from "lodash";

import {
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM
} from "../actions/types";

const streamsReducer = (prevState = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
            return {...prevState, [action.payload.id]: action.payload};
        case FETCH_STREAM:
            return {...prevState, [action.payload.id]: action.payload};
        case FETCH_STREAMS:
            return {...prevState, ..._.mapKeys(action.payload, 'id')};
        case EDIT_STREAM:
            return {...prevState, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(prevState, action.payload);
        default:
            return prevState;
    }
}

export default streamsReducer;