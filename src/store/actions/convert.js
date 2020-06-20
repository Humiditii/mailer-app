import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const initConversion = () => {
    return {
        type: actionTypes.INIT_CONVERSION
    }
}

export const conversionFailed = (error) => {
    return {
        type: actionTypes.CONVERSION_FAILED,
        error: error
    }
}


export const conversionSuccess = (filename,[...fileContent]) => {
    return {
        type: actionTypes.CONVERSION_SUCCESS,
        filename: filename,
        fileContent: [...fileContent]
    }
}

export const getConvertedFiles = ([...fileDetails]) => {
    return {
        type: actionTypes.GET_CONVERTED_FILES,
        fileDetails: [...fileDetails]
    }
}



export const conversionProcess = (token, fileToConvert) => {
    return dispatch => {
        dispatch(initConversion());

        const endpoint = '/convert/upload';

        const formData = new FormData();
        formData.append('file', fileToConvert, fileToConvert.name);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        }
    
        axios.post(endpoint, formData, config ).then( result => {
            //console.log(result)
            const fileContentArr = []
            for (const x of result.data.file_content ) {
               fileContentArr.push(x); 
            }
            //console.log(fileContentArr)
            dispatch( conversionSuccess(result.data.file_name, fileContentArr) )

        }).catch( err => {
            console.log(err)
            dispatch( conversionFailed(err))
        })

    }
}

export const getFiles = (token) => {
    return dispatch => {
        dispatch(initConversion());
        const endpoint = '/convert/files';
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        axios.get(endpoint, config).then( response => {
           dispatch(getConvertedFiles([...response.data.data]) )
            console.log(response);
        }).catch( err => {
            dispatch( conversionFailed(err) )
            console.log(err)
        });

    }
}