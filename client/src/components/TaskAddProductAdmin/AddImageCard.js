import React from 'react';

const AddImageCard = ({imageIndex, fileSelectedHandler, clearImg, file}) => {
    const fileUrl = file[imageIndex]
    
    return (
        <div className="col-md-3 formAddProduct--img">
            <button className={fileUrl ? 'btnCloseImg' : 'displayImg'}
                    onClick={(e) => clearImg(e, imageIndex)}
            >
                <i className="fa fa-times"></i>
            </button>
            {fileUrl && <img src={fileUrl} alt='img' />}
            <div className={fileUrl ? 'displayImg' : 'imgNone'}>
                <div className="imgNone--content">
                    <label htmlFor={`upload-photo-${imageIndex}`} id="label"><i className="fa fa-plus-circle"></i></label>
                    <p>Add photo</p>
                    <input 
                        style={{display: 'none'}}
                        type="file" 
                        onChange={(e)=>fileSelectedHandler(e, imageIndex)}  
                        id={`upload-photo-${imageIndex}`}
                    />   
                </div>
            </div>
        </div>
    );
};

export default AddImageCard;