import React, {Component} from 'react';
import './TaskControlAdmin.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class TaskControlAdmin extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="row taskControl">
                            <div className="col-md-4 taskControl--left">
                                <p>Add Product</p>
                            </div>
                            <div className="col-md-8 taskControl--right">
                                <div className="taskControl--icon">
                                    <img src = {process.env.PUBLIC_URL + '/img/icon.jpg'} alt="icon"/>
                                </div>
                                <DropdownButton id="dropdown-item-button" title="Lucile Bush" className="btnDropdown">
                                    <Dropdown.Item as="button">Log out</Dropdown.Item>
                                    <Dropdown.Item as="button">Setting</Dropdown.Item>
                                </DropdownButton>
                                <a href="#1"><i className="fa fa-envelope"></i></a>
                                <a href="#1"><i className="fa fa-bell"></i></a>
                            </div>
                        </div>

                        
            </React.Fragment>
        )
    }
}

export default TaskControlAdmin;