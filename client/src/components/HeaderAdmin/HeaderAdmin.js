import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './HeaderAdmin.scss';

class HeaderAdmin extends Component {
    render(){
        return (
            <div className="col-md-2 headerAdmin">
                 <div className="headerAdmin--logo">
                    <Link to="/admin">
                        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" className="Logo" />
                    </Link>
                </div>

                <nav className="navbar headerAdmin--menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <img src={process.env.PUBLIC_URL + '/img/overview.png'} alt="icon1"/>
                            <Link to="/admin">Overview</Link>
                        </li>
                        <li className="nav-item">
                            <img src={process.env.PUBLIC_URL + '/img/orders.png'} alt="icon2"/>
                            <Link to="/admin">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <img src={process.env.PUBLIC_URL + '/img/products.png'} alt="icon3"/>
                            <Link to="/admin/product-list">Products</Link>
                        </li>
                        <li className="nav-item">
                            <img src={process.env.PUBLIC_URL + '/img/payment.png'} alt="icon4"/>
                            <Link to="/admin">Payments</Link>
                        </li>
                        <li className="nav-item">
                            <img src={process.env.PUBLIC_URL + '/img/promotion.png'} alt="icon5"/>
                            <Link to="/admin">Promotions</Link>
                        </li>
                        <li className="nav-item">
                            <img src={process.env.PUBLIC_URL + '/img/setting.png'} alt="icon6"/>
                            <Link to="/admin">Setting</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default HeaderAdmin;