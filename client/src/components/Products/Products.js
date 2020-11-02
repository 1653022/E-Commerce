import React, {Component} from 'react';

class Products extends Component {
    render(){
        return(
            <section>
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Products;
