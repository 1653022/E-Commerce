import React, {Component} from 'react';
import './ProductDetail.scss';
import ProductImageLeft from './ProductImageLeft';
import ProductImageRight from './ProductImageRight';
import ProductInfo from './ProductInfo';
import Footer from '../Footer/Footer';
import Nav from '../Header/Nav';

class ProductDetail extends Component{
    render(){
        return(
            <div>  
                <Nav/>
                <div className="product-detail container">
                    <p className="text-center">Ladies/ Dresses/ Collete Stretch Linen Minidress</p>
                    
                    <div className="row">

                        <ProductImageLeft/>

                        <div className="col-md-6">
                            
                            <div className="row">

                                <ProductInfo/>

                                <ProductImageRight/>
                                
              
                            </div>
                            
                        </div>
                            
                    </div>
                    
                </div>

                <Footer/>
            </div>

        )
    }
}

export default ProductDetail