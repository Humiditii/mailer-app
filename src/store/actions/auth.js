import axios from '../../axios-instance';
// import axios from 'axios';
import * as actionTypes from './actionTypes';


export const sendStart = () =>{
    return {
        type: actionTypes.SEND_START,
        
    };
};

export const sent = (message) => {
    return {
        type: actionTypes.SENT,
        message: message
    };
};



export const sendFailed = (error) => {
    return{
        type: actionTypes.SEND_FAILED,
        error: error
    };
};

export const sender = (email,from, subject, message) => {
    return dispatch => {
        dispatch(sendStart());
        const body = {
            mail: email,
            from: from+'@anonymous',
            subject: subject,
            message: message
        }
        const endpoint = '/send/to_one';

        axios.post(endpoint, body, {
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(response => {   
            //console.log(response);
           dispatch(sent(response.data.message));
           
        }).catch(err => {
            //console.log(err)
            dispatch(sendFailed(err.message));
        });
    }
}

