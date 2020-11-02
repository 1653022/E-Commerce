import * as Types from '../constants/ActionTypes';

const data = JSON.parse(localStorage.getItem('CART'));
const initState = data ? data : [];

const carts = (state = initState, action) =>{
    let {product, quantity, size, color} = action;
    let index = -1;
    switch(action.type){
        case Types.ADD_PRODUCT_TO_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity += 1
            }else{
                state.push({
                    product,
                    quantity,
                    size,
                    color
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case Types.UPDATE_PRODUCT_TO_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case Types.CHECKOUT_REMOVE_ALL:
            localStorage.removeItem('CART');
            return [];

        default: return [...state]

    }
}

let findProductInCart = (carts, product) =>{
    let index = -1;
    carts.forEach((cart, ind) => {
        if(cart.product._id === product._id){
            index = ind;
        }
    })
    return index;
}

export default carts