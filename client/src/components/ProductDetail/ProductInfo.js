import React, {Component} from 'react';
import './ProductInfo.scss';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actGetProductRequest} from '../../actions/adminAction';
import {actAddToCart} from '../../actions/cartAction';
import {Link} from 'react-router-dom';

class ProductInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            quantityProduct: 1,
            size:'',
            color:''
        }
    }

    componentDidMount(){
        let {match} = this.props;
        if(match) {
            let id = match.params.id;
            this.props.onEditProduct(id);
        }
    }
    handleQuantity = (number) => {
        let {quantityProduct} = this.state;
        let newNumber = quantityProduct + number;
        if(newNumber < 1) {
            this.setState({
                quantityProduct: 1
            })
        }else{
            this.setState({
                quantityProduct: newNumber
            })
        }
        
    }

    onAddToCart = (product, quantity, size, color) => {
        this.props.onAddToCart(product, quantity, size, color);
        // console.log("add to cart");
        // console.log(product);
        // console.log(quantity);
        // console.log(size);
        // console.log(color);
    }

    renderColors = (textColor) => {
        let {color} = this.state
        const tranform = textColor.toLowerCase();
        return <button style={{backgroundColor: `${tranform}`}}
                        key= {textColor}
                        className = {color === tranform ? 'active' :''}
                        onClick = {() => this.handleColor(tranform)}
                ></button>
    }

    handleSize = (size) =>{

        this.setState({
            size: size
        });
    }

    handleColor = (color) =>{

        this.setState({
            color: color
        });
    }

    render(){
        let {itemEditing} = this.props;
        let nameProduct = itemEditing.name;
        let priceProduct = itemEditing.price
        let {quantityProduct} = this.state;
        let {size, color} = this.state;
        return(
            
            <div className="col-md-10 product-info">
                <h1 className="product-info__title">{nameProduct}</h1>
                <p className="product-info__price">${priceProduct}</p>
                <div className="product-info__item">
                    {[...Array(5)].map((e,i) => <i className="fa fa-star product-info__item-start" key = {i}></i>)}
                <span>  | 0 Reviews</span>
                </div>
                <div className="product-info__size">
                    <p className="product-info__size--title">Size</p>
                    <div className="product-info__size--button">

                    {itemEditing && itemEditing.sizes ? itemEditing.sizes.map((e, i) => <button 
                                                                                            key = {e} onClick={ ()=>this.handleSize(e)}
                                                                                            className = {size === e ? 'active' :''}
                                                                                        >{e}</button>) :''}
                    </div>
                </div>
                
                <div className="product-info__color">
                    <p className="product-info__color--title">Color</p>
                    <div className="product-info__color--button">

                        {itemEditing && itemEditing.colors ? itemEditing.colors.map((e, i) => this.renderColors(e)) :''}
                    </div>
                </div>
                
                <div className="product-info__quantity">
                    <span className="product-info__quantity--title">Quantity</span>
                    <div className="product-info__quantity--button">
                        <button className="control1" onClick={() => this.handleQuantity(-1)}>-</button>
                        <span className="number">{quantityProduct}</span>
                        <button className="control2" onClick={() => this.handleQuantity(1)}>+</button>
                    </div>
                </div>
                <Link to="/cart">
                    <button className="product-info__addtocart"
                            onClick={() => this.onAddToCart(itemEditing, quantityProduct, size, color)}
                    
                    >Add to cart</button>
                </Link>
                
                <hr/>
                <div className="product-info__description">
                    <p className="product-info__description--title">Model wearing size S</p>
                    <p className="product-info__description--detail">- Chest: 36"</p>
                    <p className="product-info__description--detail">- Length: 25.75"</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        onEditProduct:(id) => {
            dispatch(actGetProductRequest(id));
        },
        onAddToCart : (product, quantity, size, color) => {
            dispatch(actAddToCart(product, quantity, size, color));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductInfo));