import React, {Component} from 'react';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';
import TaskControlAdmin from '../../components/TaskControlAdmin/TaskControlAdmin';
import './AdminProductActionPage.scss'
import TaskAddProductAdmin from '../../components/TaskAddProductAdmin/TaskAddProductAdmin';

class AdminProductActionPage extends Component {

    render(){
        return(
            <div className="container-fluid adminActionPage">
                
                <div className="row menuBar--admin">
                    <HeaderAdmin/>
                    <div className="col-md-10 menuBar--right">
                        <TaskControlAdmin/>
                        
                        <div className="row">
                            <TaskAddProductAdmin/>
                            
                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default AdminProductActionPage;