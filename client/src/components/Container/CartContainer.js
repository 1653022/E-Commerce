import React, {Component} from 'react';
// import CartItem from '../Cart/CartItem';
import CartResult from '../Cart/CartResult';
import Cart from '../Cart/Cart';
import './CartContainer.scss';
import {connect} from 'react-redux';
import CartItem from '../Cart/CartItem';
import {actUpdateProductToCart, actCheckOutRequest} from '../../actions/cartAction';
import Footer from '../Footer/Footer';
import Nav from '../Header/Nav';

class CartContainer extends Component {
    onCheckOut = (carts) => {
        this.props.onCheckOutCart(carts);
        this.props.history.replace('/')
    }

    render(){
        let {carts} = this.props
        return(
            <React.Fragment>
                <Nav/>
                <div className="container cartcontainer">
                    <div className="row cart--title">My Bag</div>
                    <div className="row cart--content">
                        <div className="col-md-8">
                            <Cart>
                                {this.showCartItem(carts)}
                            </Cart>
                        </div>
                        <div className="col-md-4 cart--body2">
                            <p>Total</p>
                            <CartResult/>
                            <button onClick={() => this.onCheckOut(carts)}>
                                Check out
                            </button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
           
        )
    }

    showCartItem = carts => {
        let {onUpdateProductInCart} = this.props;
        let result = null;
        if(carts.length > 0){
            result = carts.map((item, index) =>{
                return <CartItem
                            key = {index}
                            item = {item}
                            onUpdateProductInCart = {onUpdateProductInCart}
                />
            })
        }
        return result;
    }
}

const mapStateToProps = state =>{
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateProductInCart:(product, quantity) => {
            dispatch(actUpdateProductToCart(product, quantity));
        },
        onCheckOutCart:(carts) => {
            dispatch(actCheckOutRequest(carts));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
