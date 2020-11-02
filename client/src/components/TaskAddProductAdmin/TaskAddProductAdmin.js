import React, { Component } from 'react';
import Select from 'react-select';
import './TaskAddProductAdmin.scss';
import { connect } from 'react-redux';
import { actAddProductAdminRequest, actGetProductRequest, actUpdateProductAdminRequest } from '../../actions/adminAction';
import { withRouter } from 'react-router-dom';
import AddImageCard from './AddImageCard';

const optionsCate = [
    { value: 'Casual', label: 'Casual' },
    { value: 'Go out', label: 'Go out' },
]

const optionsBrand = [
    { value: 'Zara', label: 'Zara' },
    { value: 'H&M', label: 'H&M' },
]

const optionsSize = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
]

const optionsColor = [
    { value: 'Blue', label: 'Blue' },
    { value: 'Brown', label: 'Brown' },
    { value: 'White', label: 'White' },
    { value: 'Black', label: 'Black' },
]

class TaskAddProductAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptionCate: [],
            selectedOptionSize: null,
            selectedOptionColor: null,
            selectedOptionBrand: null,
            txtName: '',
            txtPrice: 0,
            txtQuantity: 0,
            txtDescription: '',
            selectedFile: [],
            file: [],

        }
    }

    componentDidMount(){
        let {match} = this.props;
        console.log(match);
        if (match.params.id) {
            let id = match.params.id;
            this.props.onEditProduct(id); // request data from server and load to form
           
        }
        console.log("didmount add product");
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("willReceiveProps");
        console.log(nextProps.itemEditing);
        if(nextProps && nextProps.itemEditing){
            const {itemEditing} = nextProps;
            const selectedBrand =  { value: itemEditing.brand, label: itemEditing.brand }
            const selectedSize = [];
            const selectedCate = [];
            const selectedColor = [];
            const arrFileImg = [];
            itemEditing.sizes.map((ele) => {
                selectedSize.push({ value: ele, label:ele })
                return [...selectedSize];
            });
            itemEditing.colors.map((ele) => {
                selectedColor.push({ value: ele, label:ele })
                return [...selectedColor];
            });
            itemEditing.category.map((ele) => {
                selectedCate.push({ value: ele, label:ele })
                return [...selectedCate];
            });
            itemEditing.img.map((ele) => {
                let res = `http://localhost:5000${ele}`;
                arrFileImg.push(res)
                return [...arrFileImg];
            });

            
            
            this.setState({
                txtName: itemEditing.name,
                txtPrice:itemEditing.price,
                txtQuantity:itemEditing.quantity,
                txtDescription:itemEditing.description,
                selectedOptionBrand: selectedBrand,
                selectedOptionSize: selectedSize,
                selectedOptionColor: selectedColor,
                selectedOptionCate: selectedCate,
                file: arrFileImg
            })
        }
    }



    handleChange = ({ selectedOptions, inputName }) => {
        this.setState(
            { [inputName]: selectedOptions });
    };

    handleChangeInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onComplete = (e) => {
        e.preventDefault();
        const { selectedOptionCate,
            selectedOptionSize,
            selectedOptionColor,
            selectedOptionBrand,
            txtName,
            txtPrice,
            txtQuantity,
            txtDescription,
            selectedFile,
        } = this.state;
        console.log("oncomplete state");
        console.log(this.state);
        let { history, match } = this.props;

        const formData = new FormData();
        formData.append('name', txtName);
        formData.append('price', txtPrice);
        formData.append('quantity', txtQuantity);
        formData.append('description', txtDescription);
        formData.append('brand', selectedOptionBrand.value);
        for (let index = 0; index < selectedOptionCate.length; index++) {
            const element = selectedOptionCate[index].value;
            formData.append('category', element);
        }
        for (let index = 0; index < selectedOptionSize.length; index++) {
            const element = selectedOptionSize[index].value;
            formData.append('sizes', element);

        }
        for (let index = 0; index < selectedOptionColor.length; index++) {
            const element = selectedOptionColor[index].value;
            formData.append('colors', element);

        }
        for (let index = 0; index < selectedFile.length; index++) {
            const element = selectedFile[index];
            formData.append('img', element);

        }

        if(match.params.id){
            console.log("action edit product");
         
            this.props.onUpdateProductAdmin(formData);
        }else{
            console.log("action add");

            this.props.onAddProductAdmin(formData);
        }

        history.replace('/admin/product-list');

    }

    fileSelectedHandler = (event, index) => {
        const selectedFile = [...this.state.selectedFile];
        const file = [...this.state.file];

        selectedFile[index] = event.target.files[0];
        file[index] = URL.createObjectURL(event.target.files[0]);

        this.setState({
            selectedFile,
            file
        })
    }

    onCancel = (e) => {
        e.preventDefault();
        this.props.history.push('/admin/product-list');
    }

    clearImg = (e, index) => {
        e.preventDefault();
        const file = [...this.state.file]
        file[index] = null;
        this.setState({
            file: file
        })
    }


    render() {
        const { selectedOptionCate,
            selectedOptionSize,
            selectedOptionColor,
            selectedOptionBrand,
            txtName,
            txtPrice,
            txtQuantity,
            txtDescription,

        } = this.state;

        console.log(this.state);

        return (
            <form className="formAddProduct">
                <div className="row formAddProduct--input">
                    <div className="col-md-2 formAddProduct--title">
                        <label>PHOTOS</label>
                    </div>

                    <div className="col-md-10 formAddProduct--photo">
                        <div className="row">
                           

                            {
                                [...Array(4)].map((_, index) => <AddImageCard
                                    imageIndex={index}
                                    fileSelectedHandler={this.fileSelectedHandler}
                                    clearImg={this.clearImg}
                                    file={this.state.file}
                                    key={index}
                                />)
                            }

                        </div>
                        <label className="label--photo">
                            You can add up to 4 photos. The 1st photo will be set as cover (main photo)
                        </label>
                    </div>

                </div>
                <div className="row formAddProduct--input">
                    <div className="col-md-2 formAddProduct--title">
                        <label>NAME</label>
                    </div>
                    <div className="col-md-10 input--data">
                        <input
                            type="text"
                            value={txtName}
                            name="txtName"
                            onChange={this.handleChangeInput}
                            className="form-control"

                        />
                    </div>

                </div>

                <div className="row formAddProduct--input">
                    <div className="col-md-2 formAddProduct--title">
                        <label>CATEGORIES</label>
                    </div>
                    <div className="col-md-10">
                        <Select
                            value={selectedOptionCate}
                            onChange={(selectedOptions) => this.handleChange({ selectedOptions, inputName: 'selectedOptionCate' })}
                            options={optionsCate}
                            isMulti={true}
                        />
                    </div>

                </div>

                <div className="row formAddProduct--input">
                    <div className="col-md-2 formAddProduct--title">
                        <label>BRAND</label>
                    </div>
                    <div className="col-md-10">
                        <Select
                            value={selectedOptionBrand}
                            onChange={(selectedOptions) => this.handleChange({ selectedOptions, inputName: 'selectedOptionBrand' })}
                            options={optionsBrand}
                        />
                    </div>

                </div>

                <div className="row formAddProduct--input">
                    <div className="col-md-2 formAddProduct--title">
                        <label>PRICE($)</label>
                    </div>
                    <div className="col-md-10 input--data">
                        <input
                            type="number"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.handleChangeInput}
                            className="form-control"
                        />
                    </div>

                </div>

                <div className="row formAddProduct--input">
                    <div className="col-md-2 formAddProduct--title">
                        <label>SIZE</label>
                    </div>
                    <div className="col-md-10">
                        <Select
                            value={selectedOptionSize}
                            onChange={(selectedOptions) => this.handleChange({ selectedOptions, inputName: 'selectedOptionSize' })}
                            options={optionsSize}
                            isMulti={true}
                        />
                    </div>

                </div>

                <div className="row formAddProduct--input">
                    <div className="col-md-2 formAddProduct--title">
                        <label>COLORS</label>
                    </div>
                    <div className="col-md-10">
                        <Select
                            value={selectedOptionColor}
                            onChange={(selectedOptions) => this.handleChange({ selectedOptions, inputName: 'selectedOptionColor' })}
                            options={optionsColor}
                            isMulti={true}
                        />
                    </div>

                </div>

                <div className="row formAddProduct--input">
                    <div className="col-md-2 formAddProduct--title">
                        <label>QUANTITY</label>
                    </div>
                    <div className="col-md-10 input--data">
                        <input
                            type="number"
                            name="txtQuantity"
                            value={txtQuantity}
                            onChange={this.handleChangeInput}
                            className="form-control"
                        />
                    </div>

                </div>

                <div className="row formAddProduct--input">
                    <div className="col-md-2 formAddProduct--title">
                        <label>DESCRIPTION</label>
                    </div>
                    <div className="col-md-10 input--data">
                        <input
                            type="text"
                            name="txtDescription"
                            value={txtDescription}
                            onChange={this.handleChangeInput}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="formAddProduct--btnControl">
                    <button className="btnCancel"
                        onClick={this.onCancel}
                    >Cancel</button>
                    <button type="submit"
                        className="btnCancel"
                        onClick={this.onComplete}
                    >Complete</button>
                </div>

            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductAdmin: (product) => {
            dispatch(actAddProductAdminRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProductAdmin: (product) =>{
            dispatch(actUpdateProductAdminRequest(product));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskAddProductAdmin));