import React, {Component} from 'react';
import Nav from '../../components/Header/Nav';
import Footer from '../../components/Footer/Footer';
import Products from '../../components/Products/Products';
import ProductItem from '../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import {fetchProductAdminRequest, fetchProductCasualRequest, fetchProductGoOutRequest} from '../../actions/adminAction';
import Category from '../../components/Category/Category';



class HomePage extends Component{
    componentDidMount(){
        this.props.fetchAllProducts();
    }

    allProduct =() =>{
        this.props.fetchAllProducts();
    }

    productCasual = () => {
        this.props.fetchProductCasual();
    }

    productGoOut = () => {
        this.props.fetchProductGoOut();
    }


    render(){
        let {products} = this.props
        return(
            <React.Fragment>
                <Nav/>
                    <div className="container-fluid">
                        <div className="row">
                            <Category 
                                onProductCasual={() => this.productCasual()}
                                onProductGoOut={() => this.productGoOut()}
                                onAllProduct = {() => this.allProduct()}
                            />
                            <div className="col-md-10">
                                <Products>
                                    {this.showProduct(products)}
                                </Products>
                            </div>
                        </div>
                    </div>
                    
                <Footer/>
            </React.Fragment>
           
        )
    }

    showProduct(products){
        let res= null;
        if(products.length > 0){
            res = products.map((product, index) =>{
                return <ProductItem 
                             key = {product._id} 
                             product = {product}
                        />
            })
        } 
        return res;
    }

    // showProduct(products){
    
    //     (products.length && products.map((product, index) => {
    //         return <ProductItem 
    //                     key = {product._id} 
    //                     product = {product}
    //                 />
    //     }))
    // }

}

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        fetchAllProducts: () => {
            dispatch(fetchProductAdminRequest());
        },
        fetchProductCasual:() => {
            dispatch(fetchProductCasualRequest());
        },
        fetchProductGoOut:() => {
            dispatch(fetchProductGoOutRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);