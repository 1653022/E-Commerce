import * as Types from '../constants/ActionTypes';

let initState = {user: JSON.parse(localStorage.getItem('user')), message: ''};

const userReducer = (state = initState, action) => {
    switch(action.type){
        case Types.POST_LOGIN:
            return{...state, user:action.payload.user, message: action.payload.message};

        case Types.LOG_OUT:
            localStorage.removeItem('user');
            localStorage.removeItem('user_token');
            return state;

        default:
            return state;
    }
}

export default userReducer;