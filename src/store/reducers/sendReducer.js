import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    loading: false,
    message: null,
}


const sendStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}
const sendFailed = (state, action) => {
   return {
        ...state,
        error: action.error,
        loading: false
   }
}


const sent = (state, action) => {
    return {
        ...state,
        loading: false,
        message: action.message,
        error: false
    }
}


const reducer = (state=initialState, action) => {
    switch( action.type ){
        case actionTypes.SEND_START: return sendStart(state, action);
        case actionTypes.SEND_FAILED : return sendFailed(state, action);
        case actionTypes.SENT: return sent(state, action);
        
        default:
            return state;
    }
}


export default reducer;