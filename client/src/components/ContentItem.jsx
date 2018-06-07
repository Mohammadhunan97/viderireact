import React from 'react';

let ContentItem = ({item,select_item, folder,}) => (
    <div
      className="content-item"
      onClick={() => select_item(item)}
    >
      <img
          src={item.previewURL}
          width="64px"
          height="64px"
          alt={folder}
      />

      <div className="original-poster">
        <strong>
          <p>{item.user}</p>
        </strong>


        {item.width > 1200 ? <p>HD image</p> : <p>image</p>}

      {
        item.type === "film"?
          <div>
            <p>FILM</p>
            <p>Duration: {item.duration} seconds</p>
          </div>
          :
          <p>PHOTO</p>
      }
        <p>
          {item.width} X {item.height}
        </p>
      </div>
    </div>
);

export default ContentItem;

