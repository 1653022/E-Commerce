import React, {Component} from 'react';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';
import TaskControlAdmin from '../../components/TaskControlAdmin/TaskControlAdmin';
import ProductListAdmin from '../../components/ProductListAdmin/ProductListAdmin';
import './AdminProductPage.scss';
import {connect} from 'react-redux';
import ProductItemAdmin from '../../components/productItemAdmin/productItemAdmin';
import {fetchProductAdminRequest, onDeleteProductAdminRequest} from '../../actions/adminAction';
import ButtonControl from '../../components/TaskControlAdmin/ButtonControl';


class AdminProductPage extends Component {

    componentDidMount(){
        this.props.fetchAllProducts();
    }

    onDelete = (id) =>{
        this.props.onDeleteProduct(id);
        //delete server --> delete redux
    }

    render(){
        let {products} = this.props
        return(
            <div className="container-fluid">
                
                <div className="row menuBar-admin">
                    <HeaderAdmin/>
                    <div className="col-md-10">
                        <TaskControlAdmin/>
                        <ButtonControl/>
                        <div className="row">
                            
                            <ProductListAdmin>
                                {this.showAllProductAdmin(products)}
                            </ProductListAdmin>
                            
                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
    showAllProductAdmin = (products) => {
        let result = null;
        if(products.length > 0){
            result = products.map((product, index) =>{
                return(
                    <ProductItemAdmin
                        key={product._id}
                        product = {product}
                        index = {index}
                        onDelete = {this.onDelete}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        fetchAllProducts: () =>{
            dispatch(fetchProductAdminRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(onDeleteProductAdminRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductPage);