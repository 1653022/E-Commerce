import * as types from '../constants/ActionTypes';


export const actAddToCart = (product, quantity) =>{
    return{
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actUpdateProductToCart = (product, quantity) =>{
    return{
        type: types.UPDATE_PRODUCT_TO_CART,
        product,
        quantity
    }
}

export const actDeleteProductInCart = product =>{
    return{
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}