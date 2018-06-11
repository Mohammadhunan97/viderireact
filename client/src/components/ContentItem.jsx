import React from 'react';
import HiRes from '../assets/hi-res.png';
import VidPlaceholder from '../assets/video_placeholder.png';
import ImagePlaceholder from '../assets/image_placeholder.png';

let outputPlaceholderImageBasedOnWidth = (type) => {
  switch(type){
    case 'film':
      return (<img src={VidPlaceholder} className="placeholder-item"/>)
    default:
      return (<img src={ImagePlaceholder} className="placeholder-item"/>)
  }
}



let ContentItem = ({item,select_item, folder,}) => (
    <div
      className="content-item"
      onClick={() => select_item(item)}
    >
      <img
          className="preview-img"
          src={item.previewURL}
          alt={folder}
      />
            <div className="additional-flex">
          <p>.</p>
      </div>
      <div className="original-poster">
        <strong>
          <p className="content-text">{item.title}</p>
        </strong> 
        <div className="content-description">
          {
            outputPlaceholderImageBasedOnWidth(item.type)
          }
          <br/>
          <p>
              {item.width} x {item.height}
          </p>
          <p className="context-text">
            Created
          </p>
          <p>{item.full_date}</p>
        </div>
      </div>

      <div className="additional-flex">
          <p>.</p>
      </div>
      <div className="additional-flex">
          <p>.</p>
      </div>
      <div className="additional-flex">
          <p>.</p>
      </div>
      
    </div>
);

export default ContentItem;

