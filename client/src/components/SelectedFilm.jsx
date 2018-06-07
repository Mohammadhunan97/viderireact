import React from 'react';

let SelectedFilm = ({deselect_item, filmpath}) => (
    <div>
        <button 
            className="close-selected"
            onClick={() => deselect_item()}
        > X </button>
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