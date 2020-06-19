import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    loading: false,
    token: null,
    userId: null,
    authMsg: null,
    signupMsg: null,
    toBeRedirected: false,
    mismatch: null
}

const mismatch = (state, action) => {
    return {
        ...state,
        mismatch: 'Password Mismatch'
    }
}

const authStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}
const authFail = (state, action) => {
   return {
        ...state,
        error: action.error,
        loading: false
   }
}

const redirectAuth = (state,action) => {
    return {
        ...state,
        toBeRedirected: true
    }
}

const authSignUp = (state, action) => {
    return {
        ...state,
        error:null,
        loading:false,
        toBeRedirected: true,
        signupMsg: action.signupMsg

    }
}

const login = (state, action) => {
    return {
        ...state,
        toBeRedirected: true
    }
}

const authSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        token: action.token,
        userId: action.userId,
        role: action.role,
        authMsg: action.authMessage,
        toBeRedirected: true
    }
}

const authLogout = (state, action) => {
    return {
        ...state,
        token: null,
        userId: null,
        role: null,
        authMsg: null
    }
}
const reducer = (state=initialState, action) => {
    switch( action.type ){
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_FAIL : return authFail(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.SIGNUP: return authSignUp(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.MISMATCH : return mismatch(state, action);
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.REDIRECT: return redirectAuth(state, action);
        default:
            return state;
    }
}


export default reducer;