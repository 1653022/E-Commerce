import {combineReducers} from 'redux';
import products from './products';
import carts from './carts';
import itemEditing from './itemEditing';
import userReducer from './userReducer'

const appReducers = combineReducers({
    products,
    carts,
    itemEditing,
    userReducer
});

export default appReducers;