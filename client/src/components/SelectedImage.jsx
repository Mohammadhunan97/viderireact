import React from 'react';

let SelectedImage = ({deselect_item,imgpath}) => (
    <div>
        <button 
            className="close-selected"
            onClick={() => deselect_item()}
        > X </button>
        <div className="selected-item">
            <img
                className="selected-img"
                src={imgpath}
            /> 
        </div>
    </div>
);

export default SelectedImage;