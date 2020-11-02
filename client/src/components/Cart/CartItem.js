import React, {Component} from 'react';
import './CartItem.scss';

class CartItem extends Component{
    render(){
        let {item} = this.props;
        let {quantity, size, color} = item;
        return(
        <tr className="cartitem">
            <th scope="row">
                <img src={`http://localhost:5000${item.product.img[0]}`} alt="logo" className="product1"/>
            </th>
            <td>
                <p>{item.product.name}</p>
            </td>
            <td className="cartitem--color">
                {/* <span>{color}</span> */}
                <button style={{backgroundColor: color}}></button>
            </td>
            <td>
                <span>{size}</span>
            </td>
            <td className="cartitem--quantity">
               
                <div className="quantity--content">
                    <button className="control1" 
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                    >-</button>
                    <span className="number">{quantity}</span>
                    <button className="control2" 
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                    >+</button>
                </div>
            </td>
            <td>
                <span>${this.showTotal(item.product.price, item.quantity)}</span>
            </td>
        </tr>
        )
    }

    showTotal = (price, quantity) => {
        return price*quantity;
    }

    onUpdateQuantity = (product, quantity) => {
        let {onUpdateProductInCart} = this.props;
        if(quantity > 0) {
            onUpdateProductInCart(product, quantity);
        }
    }
}

export default CartItem;