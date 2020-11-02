import React, {Component} from 'react';
import './menu.scss';

class Menu extends Component{
    render(){
        return(
            <div className="menu menu-custom">
                <hr/>
                <div className="dropdown">
                    <button className="dropbtn">Men <i className="fa fa-chevron-down"></i></button>
                    <div className="dropdown-content">
                        <a href="#1">Tops</a>
                        <a href="#2">Bottoms</a>
                        <a href="#3">Dresses</a>
                        <a href="#1">Jackets</a>
                        <a href="#1">Shoes</a>
                        <a href="#1">Accesories</a>
                        <a href="#1">Sale</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Ladies <i className="fa fa-chevron-down"></i></button>
                    <div className="dropdown-content">
                        <a href="#1">Tops</a>
                        <a href="#1">Bottoms</a>
                        <a href="#1">Dresses</a>
                        <a href="#1">Jackets</a>
                        <a href="#1">Shoes</a>
                        <a href="#1">Accesories</a>
                        <a href="#1">Sale</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Girls <i className="fa fa-chevron-down"></i></button>
                    <div className="dropdown-content">
                        <a href="#1">Tops</a>
                        <a href="#1">Bottoms</a>
                        <a href="#1">Dresses</a>
                        <a href="#1">Jackets</a>
                        <a href="#1">Shoes</a>
                        <a href="#1">Accesories</a>
                        <a href="#1">Sale</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Boys <i className="fa fa-chevron-down"></i></button>
                    <div className="dropdown-content">
                        <a href="#1">Tops</a>
                        <a href="#1">Bottoms</a>
                        <a href="#1">Dresses</a>
                        <a href="#1">Jackets</a>
                        <a href="#1">Shoes</a>
                        <a href="#1">Accesories</a>
                        <a href="#1">Sale</a>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Menu;