import React, { Component } from 'react';
import './ModalLogin.scss';
// import axios from 'axios';
import {Modal} from 'react-bootstrap';
import {postLoginRequest} from '../../actions/userActions';
import {connect} from 'react-redux';

class ModalLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state)
    }

    onSubmit = async (event) =>{
        event.preventDefault();
        const { email, password } = this.state;
        // let formdata = {
        //     email: email,
        //     password: password
        // }
        // try {
        //     const result = await axios.post('http://localhost:5000/users/login', formdata)///api
        //     console.log(result.data)
        // } catch (error) {
        //     console.log(error)
        // }

        this.props.postLogin(email, password);

        this.props.onClose();
    }


    render() {
        const {email, password} = this.state;

        return (

            <Modal show={this.props.isOpenLogin} onHide={this.props.onClose} className="modal--login">
            <div className="modal--content">
                <Modal.Body className = "modal--body">
                    <button type="button" 
                            className="close" 
                            data-dismiss="modal"
                            onClick={this.props.onClose}>&times;
                    </button>
                    <h4 className="modal-title">Log In</h4>
                    <form>
                    <div className="form-group">
                        <label>E-MAIL</label>
                        <input type="text" 
                                className="form-control" 
                                name="email"
                                value={email} 
                                onChange = {this.onChange}
                                placeholder="Enter your email..." 
                                autoComplete="off"/>
                    </div>
                    <div className="form-group">
                        <label>PASSWORD</label>
                        <input type="password" 
                                className="form-control" 
                                name="password"
                                value = {password} 
                                onChange = {this.onChange}
                                placeholder="Enter your password..." 
                        />
                    </div>

                    <div className="row modal-body__remember">

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 modal-body__remember--color">
                            <div className="checkbox">
                                <label><input type="checkbox" value="" />&nbsp;Remember Password</label>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 modal-body__remember--forgot">
                            <a href="#1">Forgot your password?</a>
                        </div>

                    </div>
                    
                   
                    <button type="submit" 
                            className="btn btn__login"
                            onClick={this.onSubmit}>Log In
                    </button>

                  
                </form>
                    
                </Modal.Body>
                <Modal.Footer className="modal--footer">
                    <p className="text-center">Don't have an account?<a href="#1"> Register</a></p>
                </Modal.Footer>
            </div>

            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postLogin: (email, password) => {
            dispatch(postLoginRequest(email, password));
        }
    }
}



export default connect(null, mapDispatchToProps)(ModalLogin);