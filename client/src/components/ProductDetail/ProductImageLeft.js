import React, {Component} from 'react';
import './ProductImageLeft.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actGetProductRequest} from '../../actions/adminAction';



class ProductImageLeft extends Component{
    componentDidMount(){
        let {match} = this.props;
        if(match) {
            let id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    render(){
        const {itemEditing} = this.props;
        

        return(
            <div className="col-md-6 image-left">
                <div className="image__detail">
                        
                        {[...Array(4)].map((e,i) => 
                            <img  src={`${process.env.PUBLIC_URL}/img/img${i+1}.jpg`} alt={`imgL${i}`} key={i}/>
                        )}

                </div>
            
                <div className="image__big">
                    {itemEditing && itemEditing.img ? <img src={`http://localhost:5000${itemEditing.img[0]}`}  alt="imgItem"/> : <img src={`http://localhost:5000${itemEditing.img}`}  alt="imgItem"/>}
                        {/* <img src={`http://localhost:5000${itemEditing.img}`}  alt="imgItem"/> */}

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditProduct:(id) => {
            dispatch(actGetProductRequest(id));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductImageLeft));