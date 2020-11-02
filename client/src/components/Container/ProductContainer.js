import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import ProductItem from '../ProductItem/ProductItem';
import {actAddToCart} from '../../actions/index';

class ProductContainer extends Component {
    render() {
        let { products } = this.props;
        
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        )
    }

    // showProduct = (products) =>
        
    //     !!products.length && products.map((product, index) => <ProductItem
    //     key={index}
    //     product={product}

    // />)
    
    showProduct(products){
        let result = null;
        const {onAddToCart} = this.props
        if(products.length > 0){
            result = products.map((product, index) =>{
                return <ProductItem 
                            key = {index} 
                            product = {product}
                            onAddToCart = {onAddToCart}
                        />
            });
        }
        return result;
    }
        
       

}

const mapStateToProps = state => ({
        products: state.products
    })

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) =>{
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
