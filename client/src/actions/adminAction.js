import * as Types from '../constants/ActionTypes';
import callApiHeader from '../utils/apiCaller2';
import callApi from '../utils/apiCaller'

// ADD PRODUCT

export const actAddProductAdminRequest = (product) =>{
    return(dispatch) => {
        return callApiHeader('admin/clothes/add_product', 'POST', product).then(res => {
            dispatch(actAddProductAdmin(res.data))
        });
    }
}

export const actAddProductAdmin = (product) =>{
    return{
        type: Types.ADD_PRODUCT_ADMIN,
        product
    }
}

// FETCH ALL PRODUCT

export const fetchProductAdminRequest = () => {
    return(dispatch) => {
        return callApi('admin/clothes', 'GET', null).then(res => {
            dispatch(fetchProductAdmin(res.data));
        })
    }
}

export const fetchProductAdmin = (products) => {
    return{
        type: Types.FETCH_ALL_PRODUCT_ADMIN,
        products
    }
}

// FETCH ALL PRODUCT CASUAL

export const fetchProductCasualRequest = () => {
    return(dispatch) => {
        return callApi('category/casual', 'GET', null).then(res => {
            dispatch(fetchProductCasual(res.data));
        })
    }
}

export const fetchProductCasual = (products) => {
    return{
        type: Types.FETCH_ALL_PRODUCT_ADMIN,
        products
    }
}

// FETCH ALL PRODUCT GO OUT

export const fetchProductGoOutRequest = () => {
    return(dispatch) => {
        return callApi('category/goingout', 'GET', null).then(res => {
            dispatch(fetchProductGoOut(res.data));
        })
    }
}

export const fetchProductGoOut = (products) => {
    return{
        type: Types.FETCH_ALL_PRODUCT_GOOUT,
        products
    }
}

// DELETE PRODUCT

export const onDeleteProductAdminRequest = (id) => {
    return(dispatch) =>{
        return callApi(`admin/clothes/delete/${id}`, 'DELETE', null).then(res => {
            dispatch(onDeleteProductAdmin(id));
        })
    }
}

export const onDeleteProductAdmin = (id) => {
    return {
        type: Types.DELETE_PRODUCT_ADMIN,
        id
    }
}

// GET 1 PRODUCT

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`admin/clothes/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data))
        })
    }
} 

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

// UPDATE PRODUCT

export const actUpdateProductAdminRequest = (product) => {
    return dispatch => {
        return callApiHeader('admin/clothes/editClothes', 'PUT', product).then(res => {
            dispatch(actUpdateProduct(product));
        })
    }
}

export const actUpdateProduct = (product) =>{
    return {
        type: Types.UPDATE_PRODUCT_ADMIN,
        product
    }
}