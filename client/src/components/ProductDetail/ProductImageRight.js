import React, {Component} from 'react';
import './ProductImageRight.scss';

class ProductImageRight extends Component{
    render(){
        return(
            <div className="col-md-2 image-right">
                <p className="image-right__title1">More from</p>
                <p className="image-right__title2">Zara</p>
                    {[...Array(4)].map((e,i) => 
                        <img  src={`${process.env.PUBLIC_URL}/img/img${i+1}.jpg`} alt={`a${i}`} key={i}/>
                    )}
            </div>
        )
    }
}

export default ProductImageRight;