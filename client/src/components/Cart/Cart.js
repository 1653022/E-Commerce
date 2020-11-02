import React, {Component} from 'react';
import './Cart.scss';

class Cart extends Component{
    render(){
        let {children} = this.props;
        return(
            <table className="table table--content">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                   {children}
                </tbody>
            </table>
        )
    }
}

export default Cart;