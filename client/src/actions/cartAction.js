import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actAddToCart = (product, quantity, size, color) => {
    return{
        type: Types.ADD_PRODUCT_TO_CART,
        product,
        quantity,
        size,
        color
    }
}

export const actUpdateProductToCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_TO_CART,
        product,
        quantity
    }
}

export const actDeleteProductInCart = (product) =>{
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

// CHECK OUT CART

export const actCheckOutRequest = (carts) => {
    return(dispatch) => {
        return callApi('admin/clothes/update', 'PUT', carts).then(res => {
            dispatch(actCheckOut());
        })
    }
}

export const actCheckOut = () => {
    return{
        type: Types.CHECKOUT_REMOVE_ALL
    }
}