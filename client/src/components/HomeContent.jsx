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
      console.log('getderived')
    //return props;
    let content = [];
    fetch(
      `https://pixabay.com/api/?key=${key.pixabay}&q=${props.selected_folder}`
    ).then(results => {
      results.json().then(data => {
        data.hits.forEach(item => {
          let current_item = {
            largeImageURL: item.largeImageURL,
            user: item.user,
            previewURL: item.previewURL,
            width: item.imageWidth,
            height: item.imageHeight,
            likes: item.likes
          };
          content.push(current_item);
        });

        state.content = content;
        return state;
      });
    });
  }
  select_item(item) {
    that.setState({ selected_item: item, item_is_selected: true });
  }
  deselect_item() {
    that.setState({ selected_item: null, item_is_selected: false });
  }
  render() {
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
          {this.state.content.map((item, i) => {
            return (<ContentItem
                key={"contentitem" + i}
                item={item}
                selected_folder={this.state.selected_folder}
                select_item={this.select_item}
            />);
          })}
        </div>
      </div>
    );
  }
}

export default HomeContent;
