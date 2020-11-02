import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './productItemAdmin.scss';
import {Link} from 'react-router-dom';

class ProductItemAdmin extends Component {

    onDelete = (id) =>{
        this.props.onDelete(id);
    }

    render(){
        let {product} = this.props
        return (
            <tr className="productItemAdmin">
                <td style={{width:380}}>
                    <div className="row imgItem">
                        <div className="col-2 imgItem--img">
                            <img src={`http://localhost:5000${product.img[0]}`}  alt="imgItem"/>
                        </div>
                        <div className="col-10 imgItem--title">
                            <p>{product.name}</p>
                        </div>
                    </div>
                </td>

                <td>{product.quantity}</td>

                <td style={{width:300}}>Today, 8th Aug, 2018</td>

                <td>400</td>

                <td>
                    <DropdownButton id="dropdown-item-button" title="Action" className="btnDropdown">
                        <Link to={`/admin/product/${product._id}/edit`}>
                            <Dropdown.Item as="button">
                                <i className="fa fa-pencil"></i>&nbsp;Edit
                            </Dropdown.Item>
                        </Link>
                        
                        <Dropdown.Item as="button" 
                                    onClick = {() => this.onDelete(product._id)}><i className="fa fa-trash"></i>&nbsp;Remove
                        
                        </Dropdown.Item>
                    </DropdownButton>
                </td>
            </tr>
        )
    }
}

export default ProductItemAdmin;