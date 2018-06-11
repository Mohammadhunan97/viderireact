import React from 'react';
import Close from '../assets/close.png';
let SelectedFilm = ({deselect_item, filmpath}) => (
    <div>
        <button 
            className="close-selected"
            onClick={() => deselect_item()}
        > 
        <img 
            src={Close}
        />
         </button>
        <div className="selected-item">
            <video 
                className="selected-film"
                src={filmpath}
                controls
                autoplay
            >Your browser does not support the video tag.</video>
        </div>
    </div>
);

export default SelectedFilm;