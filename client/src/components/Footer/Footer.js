import React, {Component} from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <div className="container-fluid">
                <hr/>
                
                <div className="footer1">
                    <div className="footer__logo">
                        
                        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logofooter"/>
                        
                    </div>

                    <div className="footer__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Products</Link>
                        <Link to="/">Services</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Help</Link>
                        <Link to="/">Contacts</Link>
    
                    </div>

                    <div className="footer__icon">
                        <a href="#1"><i className="fa fa-twitter"></i></a>
                        <a href="#1"><i className="fa fa-facebook-f"></i></a>
                        <a href="#1"><i className="fa fa-instagram"></i></a>
                        
                    </div>
                </div>

                <div className="footer2">
                    <hr style={{padding: "0px 50px"}}/>
                    <div className="footer__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Products</Link>
                        <Link to="/">Services</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Help</Link>
                        <Link to="/">Contacts</Link>

                    </div>
                </div>   
                
            </div>
        )
    }
}

export default Footer;
