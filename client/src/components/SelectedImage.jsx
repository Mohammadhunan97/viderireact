import React from 'react';
import Close from '../assets/close.png';

let SelectedImage = ({deselect_item,imgpath}) => (
    <div>
        <button 
            className="close-selected"
            onClick={() => deselect_item()}
        >
        <img src={Close} />
        </button>
        <div className="selected-item">
            <img
                className="selected-img"
                src={imgpath}
            /> 
        </div>
    </div>
);

export default SelectedImage;