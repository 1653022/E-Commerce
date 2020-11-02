import React, {Component} from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Header/Nav';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

class ProductDetailPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Nav/>
                    <ProductDetail/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ProductDetailPage;