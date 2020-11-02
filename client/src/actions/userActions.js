import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller'



export const postLoginRequest = (email, password) => {
    return async(dispatch) => {
        try {
            return callApi('users/login', 'POST', {email, password}).then(res => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('user_token', res.data.token);
                dispatch(postLogin(res.data.user, res.data.message));
            })
        } catch (err){
            console.log(err);
        }
    }
}

export const postLogin = (user, message) =>{
    return {
        type: Types.POST_LOGIN,
        payload: {
            user,
            message
        }
    }
}

export const actLogOut = () => {
    return{
        type: Types.LOG_OUT
    }
}