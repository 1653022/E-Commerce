import React, {Component} from 'react';
import Header from './Header';
import Menu from './Menu';


class Nav extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Menu/>
            </div>
        )
    }
}

export default Nav;