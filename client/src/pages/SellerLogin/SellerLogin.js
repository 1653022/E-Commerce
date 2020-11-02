import React, {Component} from 'react';
import './SellerLogin.scss';
import { postLoginRequest } from '../../actions/userActions';
import {connect} from 'react-redux';

class SellerLogin extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleLogin = async (e) => {
        e.preventDefault();
        let {email, password} = this.state;
        await this.props.postLogin(email, password);

        this.props.history.push('/admin/product-list');
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render(){
        const {email, password} = this.state;
        return(
            <div className="wrap">
                
                <div className="row wrap-logo">
                    <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo"/>
                </div>

                <div className="row wrap-content">
                    <div className="content">
                        <h1 className="content--title">Log in</h1>
                        <form>
                            <div className="form-group">
                                <label>EMAIL</label>
                                
                                <input type="text" 
                                        placeholder="email@example.com"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange = {this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>PASSWORD</label>
                                
                                <input  type="password" 
                                        placeholder="Enter password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={this.onChange}
                                
                                />
                            </div>

                            <button type="submit" className="content--btnlogin" onClick={this.handleLogin}>Log in</button>
                            <div className="content--forgot">
                                <a href="#1">Forgot password</a>
                            </div>

                        </form>
                        

                        
                        
                    </div>
                </div>

                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postLogin: (email, password) => {
            dispatch(postLoginRequest(email, password));
        }
    }
}

export default connect(null, mapDispatchToProps)(SellerLogin);