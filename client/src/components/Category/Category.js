import React, {Component} from 'react';
import './Category.scss';

class Category extends Component {

    onAllProduct = () => {
        this.props.onAllProduct();
    }

    onProductCS = () =>{
        this.props.onProductCasual();
    }

    onProductGO = () => {
        this.props.onProductGoOut();
    }
    render(){

       
        return (
            <div className="col-md-2 headerCategory">
                 <div className="headerCategory--logo">
                    
                        Category
                    
                </div>

                <nav className="navbar headerCategory--menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button onClick={this.onAllProduct}>All dresses</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={this.onProductCS}>Casual dresses</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={this.onProductGO}>Going out dresses</button>
                        </li>
                        <li className="nav-item">
                            <button>Party/ Ocassion dress</button>
                        </li>
                        <li className="nav-item">
                            <button>Mini dresses</button>
                        </li>
                        <li className="nav-item">
                            <button>Sets</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Category;