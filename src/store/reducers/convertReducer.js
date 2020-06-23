import * as actionTypes from '../actions/actionTypes';



const initialState = {
    filename: null,
    filecontent: [],
    dateConverted: null,
    loading: false,
    error: null,
    message: null,
    fileDetails: [],
    fileEmpty: null,
    singleFIle: [],

}

const initConversion = (state, action) => {
    return{
        ...state,
        loading: true   
    }
}

const conversionFailed = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const getSIngleFIle = (state, action) => {
    return {
        ...state,
        singleFIle: [...action.file]
    }
}

const getConvertedFiles = (state, action) => {
    return {
        ...state,
        fileDetails: [...action.fileDetails],
        loading: false
    }
}

const getFileFailed = (state, action) => {
    return {
        ...state, 
        error: action.error
    }
}

const emptyFile = (state, action) => {
    return {
        ...state,
        fileEmpty : action.emptyFIle
    }
}


const clear = (state, action) => {
    return {
        ...state,
        fileEmpty: null

    }
}

const closeFile = (state, action) => {
    return {
        ...state, 
        singleFIle: []
    }
}

const conversionSuccess = (state, action) => {
    
    return {
        ...state,
        filename: action.filename,
        filecontent: [...action.fileContent],
        loading: false
    }
    
}

const reducer  = (state=initialState, action) =>{
    switch (action.type) {
        case actionTypes.INIT_CONVERSION: return initConversion (state, action);
        case actionTypes.CONVERSION_SUCCESS: return conversionSuccess(state, action);
        case actionTypes.CONVERSION_FAILED: return conversionFailed(state, action);
        case actionTypes.GET_CONVERTED_FILES : return getConvertedFiles(state, action);
        case actionTypes.GET_FILE : return getSIngleFIle(state, action);
        case actionTypes.EMPTY_FILE : return emptyFile(state, action);
        case actionTypes.CLEAR_MESSAGE : return clear(state, action);
        case actionTypes.GET_FILE_FAILED : return getFileFailed(state, action);
        case actionTypes.CLOSE_FILE : return closeFile(state, action);
        default:
            return state;
    }
}

export default reducer;