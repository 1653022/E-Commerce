import * as Types from '../constants/ActionTypes';

// let initState = [
//     {
//         id:1,
//         name : 'Draped Dress',
//         image: 'https://lp2.hm.com/hmgoepprod?set=source[/7b/3b/7b3b14cab18dad4685785882d700c049b91b9b19.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
//         price: 500,
//         inventory: 10,
//         rating:3
//     },
//     {
//         id:2,
//         name : 'Knit Dress',
//         image: 'https://lp2.hm.com/hmgoepprod?set=source[/f0/5e/f05e5381c4e5ca4521c9e305457766e03450cf83.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
//         price: 400,
//         inventory: 15,
//         rating: 4
//     },
//     {
//         id:3,
//         name : 'Long Dress',
//         image: 'https://lp2.hm.com/hmgoepprod?set=source[/6a/67/6a6765fa7ba6f526cb3e089f224e1b66b603787c.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]',
//         price: 450,
//         inventory: 5,
//         rating: 5
//     },
//     {
//         id:4,
//         name : 'Long Dress',
//         image: 'https://lp2.hm.com/hmgoepprod?set=source[/2b/ee/2bee333f3659157b5f1c855ca858e56e526bf033.jpg],origin[dam],category[ladies_dresses_mididresses],type[LOOKBOOK],res[w],hmver[2]&call=url[file:/product/main]',
//         price: 450,
//         inventory: 5,
//         rating: 5
//     },
//     {
//         id:5,
//         name : 'Long Dress',
//         image: 'https://lp2.hm.com/hmgoepprod?set=source[/0c/56/0c56e14e8799479fc3ecc31d0fd558cd88f36bd7.jpg],origin[dam],category[ladies_dresses_shortdresses],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
//         price: 450,
//         inventory: 5,
//         rating: 2
//     },
//     {
//         id:6,
//         name : 'Long Dress',
//         image: 'https://lp2.hm.com/hmgoepprod?set=source[/d4/2b/d42bce9a4378c2fbf1594905190220cb1b0a1a5d.jpg],origin[dam],category[ladies_knitwear_turtlenecks],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
//         price: 450,
//         inventory: 5,
//         rating: 3
//     },
// ]

const findIndex = (products, id) =>{
    let res = -1;
    products.forEach((product, index) =>{
        if(product.id === id) {
            res = index;
        }
    })
    return res;
}

let initState= [];

const products = (state = initState, action) =>{
    switch(action.type){
        case Types.ADD_PRODUCT_ADMIN:
            state.push(action.product)
            return [...state];

        case Types.FETCH_ALL_PRODUCT_ADMIN:
            state = action.products;
            return [...state];

        case Types.FETCH_ALL_PRODUCT_CASUAL:
            state = action.products;
            return [...state];

        case Types.FETCH_ALL_PRODUCT_GOOUT:
            state = action.products;
            return [...state];

        case Types.DELETE_PRODUCT_ADMIN:
            let index = -1;
            let {id} = action;
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];

        case Types.UPDATE_PRODUCT_ADMIN:
            let {product} = action;
            let indexx = findIndex(state, product.id);
            state[indexx] = product;
            return [...state];
        default: return [...state];

    }
}

export default products;

