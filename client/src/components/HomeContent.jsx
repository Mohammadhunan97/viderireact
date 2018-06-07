import React, { Component } from "react";
import SelectedImage from "./SelectedImage";
import ContentItem from "./ContentItem";
const key = require("../key");
let that;

class HomeContent extends Component {
  constructor(props) {
    super(props);
    that = this;
    this.state = {
      content: [],
      selected_item: null,
      item_is_selected: false
    };
  }
  static getDerivedStateFromProps(props, state) {
    //return props;
    let content = [];
    console.log(props)
    if(props.selected_type === "photo"){
        fetch(
            `https://pixabay.com/api/?key=${key.pixabay}&q=${props.selected_folder}`
          ).then(results => {
            results.json().then(data => {
              data.hits.forEach(item => {
                let current_item = that.createCurrentItemFromPhoto(item);
                content.push(current_item);  
              });
              state.content = content;
              return state;
            });
          });
    }else if(props.selected_type === "film"){
        fetch(
            `https://pixabay.com/api/videos/?key=${key.pixabay}&q=${props.selected_folder}`
          ).then(results => {
            results.json().then(data => {
              data.hits.forEach(item => {
                let current_item = that.createCurrentItemFromVideo(item);
                content.push(current_item);  
              });
              state.content = content;
              return state;
            });
          });
    }
  }
  createCurrentItemFromPhoto(item){
    return {
        largeImageURL: item.largeImageURL,
        user: item.user,
        previewURL: item.previewURL,
        width: item.imageWidth,
        height: item.imageHeight,
        likes: item.likes,
        type: "photo"
    };
  }
  createCurrentItemFromVideo(item){
    fetch(`https://i.vimeocdn.com/video/${item.picture_id}_100x75.jpg`).then((res) => {
        return {
            user: item.user,
            duration: item.duration,
            preview: res.url,
            width: item.videos.large.width,
            height: item.videos.large.height,
            url: item.videos.large.url,
            type: "film"
        }

    })

  }
  select_item(item) {
    that.setState({ selected_item: item, item_is_selected: true });
  }
  deselect_item() {
    that.setState({ selected_item: null, item_is_selected: false });
  }
  render() { console.log(this.state.content)
    return (
      <div className="home-content">
        <p className="content-header">CONTENT</p>

        {this.state.item_is_selected ? (
          <SelectedImage
            deselect_item={this.deselect_item}
            imgpath={this.state.selected_item}
          />
        ) : null}
        <div className="content-container">
          {/* {this.state.content.map((item,i) => {
            return(<div key={"content-container-div" + i}>
            {
                item.type === "photo"? 
                    <ContentItem
                        key={"contentitem" + i}
                        item={item}
                        selected_folder={this.state.selected_folder}
                        select_item={this.select_item}
                    />: null
            }
            </div>)
          })} */}
        </div>
      </div>
    );
  }
}

export default HomeContent;
