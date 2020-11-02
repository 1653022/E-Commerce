import React, {Component} from 'react';
import './ButtonControl.scss';
import {Link} from 'react-router-dom';

class ButtonControl extends Component {
    render(){
        return (
            <div className="row buttonControl">
                
                <input type="search" className="form-control"  placeholder="Search product"/>
                <Link to="/admin/product/add">
                    <button> + Add Product</button>
                </Link>
            </div>
        )
    }
}

export default ButtonControl;