import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    home: {
        loading: false,
        error: null,
    },
};

const homeReset = (state, action) => updateObject(state, { home: initialState.home });
const homeStart = (state, action) => updateObject(state, { home: updateObject(state.home, { loading: true, message: null }) });
const homeSuccess = (state, action) => updateObject(state, { home: updateObject(state.home, { loading: false, error: null, ...action }) });
const homeFail = (state, action) => updateObject(state, { home: updateObject(state.home, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HOME_RESET: return homeReset(state, action);
        case actionTypes.HOME_START: return homeStart(state, action);
        case actionTypes.HOME_SUCCESS: return homeSuccess(state, action);
        case actionTypes.HOME_FAIL: return homeFail(state, action);

        default: return state;
    }
};