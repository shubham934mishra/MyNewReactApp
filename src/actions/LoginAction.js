//@flow
import * as ActionTypes from './ActionTypes';

export const getLoginData = (userName : {}) :any => dispatch  => {
        dispatch(fetchLoginData(userName));
    };


export const fetchLoginData = (userName : {}) => ({
        type: ActionTypes.LOGIN_SUCCESS,
        userName
    });
