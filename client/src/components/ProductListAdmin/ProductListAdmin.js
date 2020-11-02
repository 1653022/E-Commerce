import React, {Component} from 'react';


class ProductListAdmin extends Component {
    render() {
        return (
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Quantity</th>
                            <th>Date added</th>
                            <th>Profits</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
        )
    }
}

export default ProductListAdmin;