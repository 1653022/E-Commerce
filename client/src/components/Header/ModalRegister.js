import React, { Component } from 'react';
import axios from 'axios';
import './ModalRegister.scss';
import {Modal} from 'react-bootstrap';

class ModalRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    onChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = async (event) =>{
        event.preventDefault();
        const { username, email, password } = this.state;
        let formdata = {
            username: username,
            email: email,
            password: password
        }
        try {
            const result = await axios.post('http://localhost:5000/users/register', formdata)///api
            console.log(result.data);

        } catch (error) {
            console.log(error)
        }
        this.props.onClose();
    }


    render() {
        const { username, email, password } = this.state;
        return (
        <Modal show={this.props.isOpenRegis} onHide={this.props.onClose} className="modal--register">
            <div className="modal--content">
                <Modal.Body className = "modal--body">
                    <button type="button" 
                            className="close" 
                            data-dismiss="modal"
                            onClick={this.props.onClose}
                    >&times;</button>
                    <h4 className="modal-title text-center">Register</h4>
                    <form>
                        <div className="form-group">
                            <label>NAME</label>
                            <input type="text" 
                                className="form-control" 
                                name="username"
                                value = {username} 
                                onChange = {this.onChange}
                                placeholder="Enter your name" 
                                autoComplete="off"
                                />
                    </div>
                    <div className="form-group">
                            <label>EMAIL</label>
                            <input type="text" 
                                className="form-control" 
                                name="email" 
                                value = {email}
                                onChange = {this.onChange}
                                placeholder="Enter your email" 
                                autoComplete="off"
                                />
                    </div>
                    <div className="form-group">
                        <label>PASSWORD</label>
                        <input type="password" 
                                className="form-control" 
                                name="password" 
                                value = {password}
                                onChange = {this.onChange}
                                placeholder="Enter your password" 
                                autoComplete="off"
                                />
                    
                    </div>
                    <p className="modal-body__term">By creating an account you agree to the <a href="#1">Term of Service</a> and <a href="#1">Privacy Policy</a></p>

                    <button type="submit" 
                            className="btn btn__register" 
                            onClick={this.onSubmit}
                            
                            >
                            Register
                    </button>
                </form>
                    
                </Modal.Body>
                <Modal.Footer className="modal--footer">
                    <p className="text-center">Do you have an account?<a href="#1">&nbsp;Log In</a></p>
                </Modal.Footer>
            </div>
            
        </Modal>
     
    
        )
    }
}



export default ModalRegister;