import React, {Component} from 'react';
import './Dropdown.scss';

class Dropdown extends Component{
    render(){
        return(
            <div className="dropdown">
                <button className="dropbtn">Men <i class="fa fa-chevron-down"></i></button>
                <div className="dropdown-content">
                    <a href="#">Tops</a>
                    <a href="#">Bottoms</a>
                    <a href="#">Dresses</a>
                    <a href="#">Jackets</a>
                    <a href="#">Shoes</a>
                    <a href="#">Accesories</a>
                    <a href="#">Sale</a>
                </div>
            </div>
        )
    }
}

export default Dropdown;