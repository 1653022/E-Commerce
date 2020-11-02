import * as Types from '../constants/ActionTypes';

let initState = {};

const itemEditing = (state = initState, action) => {
    switch(action.type){
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;