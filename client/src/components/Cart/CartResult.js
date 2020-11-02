import React, {Component} from 'react';
import './CartResult.scss';
import {connect} from 'react-redux';


class CartResult extends Component{
    render(){
        let {carts} = this.props
        return(
            <div className="checkout">
                <div className="row">
                    <div className="col-8">
                        <p>Shipping Handling</p>
                        <p>Total product</p>

                    </div>
                    <div className="col-4">
                        <p>Free</p>
                        <p>${this.showTotalAmount(carts)}</p>
                    </div>
                </div>
                <hr/>

                <div className="row checkout--subtotal">
                    <div className="col-8">
                        <p>Subtotal</p>
                    </div>
                    <div className="col-4">
                        <p>${this.showTotalAmount(carts)}</p>
                    </div>
                </div>
            </div>
        )
    }

    showTotalAmount = (carts) => {
        let total = 0;
        carts.forEach((ele) => {
            total += ele.product.price * ele.quantity
        });
        
        return total;
    }
}

const mapStateToProps = state =>{
    return{
        carts: state.carts
    }
}

export default connect(mapStateToProps, null)(CartResult);