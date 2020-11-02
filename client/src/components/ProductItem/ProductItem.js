import React, {Component} from 'react';
import './productItem.scss';
import {Link} from 'react-router-dom';

class ProductItem extends Component {

    render(){
        let {product} = this.props;
        return(
        <div className="col-3 productItem">
            <div className="card">
                <Link to={`/product/${product._id}`}>
                    <img src={`http://localhost:5000${product.img[0]}`}  alt="imgItem"/>
                </Link>

                <div className="card-body">
                    <Link to={`/product/${product._id}`}>{product.name}
                    </Link>
                    <p className="card-text">$ {product.price}.00</p>
                  
                </div>
            </div>
        </div>
        
        

        )
    }
}

export default ProductItem;
