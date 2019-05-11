import { LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_IN_SUCCESS , LOG_OUT } from '../_actions/types';

let initialState = {

}

export default function(state=initialState, action){
    switch(action.type){
        case LOG_IN_REQUEST:
            return {
                ...state,
                loggingIn: true
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                user: action.user
            }
        case LOG_OUT:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                user: null
            }
        default:
            return state;
    }
}