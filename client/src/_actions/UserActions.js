import { LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_IN_SUCCESS, LOG_OUT } from '.types';
import { UserService } from '../services';

//TODO: Make the login function in userservice
export function logIn(email, password, history){
    return dispatch => {
        dispatch(request());
        UserService.logIn(email, password)
            .then(user => {
                dispatch(success(user));
                history.push('/');
            })
            .catch(err => {
                dispatch(failure()); 
                console.log(err);
            });
    }
    function request(){ return { type: LOG_IN_REQUEST }}
    function failure(){ return { type: LOG_IN_FAILURE }}
    function success(user){ return { type: LOG_IN_SUCCESS, user }}
}

export function logOut(){
    return dispatch => {
        dispatch(request());
        //logout
    }
    function request(){ return { type: LOG_OUT }}
}