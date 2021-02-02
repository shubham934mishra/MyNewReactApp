//@flow
import * as Actions from '../actions/ActionTypes';
import type {UserNameAction,State} from '../utilities/userTypes';

const initialState = {
    userName:{},
};


const LoginReducer = (state  : State = initialState,action : UserNameAction):State => {
    switch (action.type) {
        case Actions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                userName: action.userName
            });
        default:
            return state;
    }
};

export default LoginReducer;
