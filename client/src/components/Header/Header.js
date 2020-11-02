import React, { Component } from 'react'
import './Header.scss';
import Search from './search';
import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {actLogOut} from '../../actions/userActions';


class Header extends Component {

    constructor(){
        super();
        this.state = {
            isOpenModalRegister : false,
            isOpenModalLogin: false
        }
    }

    handleLogin = () =>{
        this.setState({isOpenModalLogin: true});
    }

    handleRegister = () =>{
        this.setState({isOpenModalRegister: true});
    }

    handleCloseRegister = () =>{
        this.setState({isOpenModalRegister: false})
    }

    handleCloseLogin = () => {
        this.setState({isOpenModalLogin: false})
    }

    onLogOut = () =>{
        console.log("logout");
        this.props.onLogOut();
        window.location.reload(false);
    }

    render() {
        return (
                <div className="header header-custom">
                    <div className="header__search">
                        <Search/>
                    </div>
                    
                    <div className="header__logo">
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" className="Logo" />
                        </Link>
                    </div>

                    <div className="header__item">
                        {this.props.user ? 

                            <React.Fragment>
                                <div className="header--icon">
                                    
                                    <img src = {process.env.PUBLIC_URL + '/img/icon.jpg'} alt="icon"/>
                                    <DropdownButton id="dropdown-item-button" className="btnDropdown" title="">
                                        <Dropdown.Item as="button" onClick={this.onLogOut}>Log out</Dropdown.Item>
                                        <Dropdown.Item as="button">Setting</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <button 
                                        data-toggle="modal" 
                                        data-target="#myModalRegister" 
                                        className="btn header__item--btn"
                                        onClick={this.handleRegister}
                                        >Register
                                </button>
                                <button data-toggle="modal" 
                                        data-target="#myModalLogin" 
                                        className="btn header__item--btn"
                                        onClick={this.handleLogin}
                                        >Login
                                </button>
                            </React.Fragment>
                        
                        }
                        
                        <Link to="/cart" className="header__item--cart"><i className="fa fa-shopping-cart"></i></Link>
                        <ModalLogin onClose = {this.handleCloseLogin} isOpenLogin = {this.state.isOpenModalLogin}/>
                        <ModalRegister onClose = {this.handleCloseRegister} isOpenRegis = {this.state.isOpenModalRegister}/>
                       
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onLogOut:() => {
            dispatch(actLogOut());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);