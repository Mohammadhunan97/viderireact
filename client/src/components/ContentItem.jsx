import React from 'react';

let ContentItem = ({item, selected_folder,select_item }) => (
    <div
      className="content-item"
      onClick={() => select_item(item.largeImageURL)}
    >
      <img
        src={item.previewURL}
        width="64px"
        height="64px"
        alt={selected_folder}
      />
      <div className="original-poster">
        <strong>
          <p>{item.user}</p>
        </strong>
        {item.width > 1200 ? <p>HD image</p> : <p>image</p>}
        <p>
          {item.width} X {item.height}
        </p>
      </div>
    </div>
);

export default ContentItem;