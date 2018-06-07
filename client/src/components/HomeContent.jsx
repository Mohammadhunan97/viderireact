import React, { Component } from "react";
import SelectedImage from "./SelectedImage";
import ContentItem from "./ContentItem";

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
  select_item(item) {
    that.setState({ selected_item: item, item_is_selected: true });
  }
  deselect_item() {
    that.setState({ selected_item: null, item_is_selected: false });
  }
  render() {
    return (
      <div className="home-content">
        

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
