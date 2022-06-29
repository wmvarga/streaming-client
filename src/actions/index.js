import { 
    GOOGLE_SIGN_IN,
    GOOGLE_SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM,
    OPEN_MODAL,
    CLOSE_MODAL,
    SELECT_ITEM
} from "./types";
import streams from '../apis/streams';
import history from "../history";

export const signInAction = (userId) => {
    return {
        type: GOOGLE_SIGN_IN,
        payload: {
            userId
        }
    }
}

export const signOutAction = () => {
    return {
        type: GOOGLE_SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const response = await streams.post('/streams', {...formValues, userId: getState().auth.userId});

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });
    
    history.push('/');
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    });
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    });
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });

    history.push('/');
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({
        type: DELETE_STREAM,
        payload: id
    });

    dispatch(closeModal());
}

export const openModal = () => {
    return {
        type: OPEN_MODAL
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const selectModalItem = (item) => {
    return {
        type: SELECT_ITEM,
        payload: item
    }
}