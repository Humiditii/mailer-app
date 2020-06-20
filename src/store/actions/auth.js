import axios from '../../axios-instance';
// import axios from 'axios';
import * as actionTypes from './actionTypes';


export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START,
        
    };
};

export const authSignUp = (signupMsg) => {
    return {
        type: actionTypes.SIGNUP,
        signupMsg: signupMsg
    };
};


export const redirectAuth = () => {return {type: actionTypes.REDIRECT}
 }

export const mismatch = () => {
    return {
        type: actionTypes.MISMATCH
    }
}

export const login = () => {
    return {
        type: actionTypes.LOGIN
    }
}

export const authSuccess = (userId, token, role, message) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
        role: role,
        authMessage: message

    };
};



export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


export const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('message');
    localStorage.removeItem('expirationDate');

    return{
        type: actionTypes.AUTH_LOGOUT
    }
}



export const checkAuthTimeout = (expiresIn) => {
    return dispatch => {

        setTimeout(() => {
            dispatch(logout());
        }, expiresIn);
    }
}

export const signUp = (email,password) => {
    return dispatch => {
        dispatch(authStart());
        const body = {
            email: email,
            password: password
        }
        const endpoint = '/auth/signup';

        axios.post(endpoint, body, {
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(response => {   
            console.log(response);
           dispatch(authSignUp(response.data.message));
           
        }).catch(err => {
            //console.log(err)
            dispatch(authFail(err.message));
        });
    }
}



export const signIn = (email,password) => {
    return dispatch => {
        dispatch(authStart());
        const body =  {
            email: email,
            password: password
        }
        //console.log(body)
        const config =  {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const endpoint = '/auth/signin';

        axios.post(endpoint, body, config).then(response => {
            console.log(response);
            if( response.data.message === 'User not found'){
                dispatch(authFail(response.data.message))
            } 
            if( response.data.statusCode === 400){
                dispatch(authFail(response.data.message))
            }
            else{
                const token = response.data.token;
                const userId = response.data.userId;
                const message = response.data.Message;
                const expiresIn = 3600 * 23* 1000;
                const expirationDate =new Date(new Date().getTime() + expiresIn);

                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                localStorage.setItem('message', message);
                localStorage.setItem('expirationDate', expirationDate);

                //console.log(message);
                dispatch(authSuccess(userId, token, message));
                dispatch(redirectAuth())
                dispatch(checkAuthTimeout(expiresIn));
             }
            
            
        }).catch( err=> {
            console.log(err)
            dispatch(authFail(err.message));
        });
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
            //console.log('First logout excecuted');
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(logout());
                //console.log('Second logout excecuted');
            }else{
                const userId = localStorage.getItem('userId');
                const message = localStorage.getItem('message');
                dispatch(authSuccess(userId, token, message));
                //dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) ));
                //console.log((expirationDate.getTime() - new Date().getTime()) / 1000);
                //console.log('worked to this extent');
            }
        }
    }
}