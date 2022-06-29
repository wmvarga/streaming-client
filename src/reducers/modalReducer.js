import {
    OPEN_MODAL,
    CLOSE_MODAL,
    SELECT_ITEM
} from '../actions/types'

const INITIAL_STATE = {
    isOpen: false,
    selectedItem: null
};

export default (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {...prevState, isOpen: true};
        case CLOSE_MODAL:
            return {...prevState, isOpen: false};
        case SELECT_ITEM:
            return {...prevState, selectedItem: action.payload}
        default:
            return prevState;
    }
}