import React, { Component } from 'react';
import SelectedImage from "./SelectedImage";
import ContentItem from "./ContentItem";
import SelectedFilm from './SelectedFilm';
let that;

class ContentList extends Component {
    constructor(props) {
        super(props);
        that = this;
        this.state = {
            selected_item: null,
            item_is_selected: false
        }
    }
    select_item(item) {
        that.setState({ selected_item: item, item_is_selected: true });
    }
    deselect_item() {
        that.setState({ selected_item: null, item_is_selected: false });
    }
    render() { console.log(this.state)
        return (<div className="content-list">
        <p className="content-header">CONTENT</p>

        {
            this.state.item_is_selected ? 
                this.state.selected_item.type === "photo"?
                    <SelectedImage
                        deselect_item={this.deselect_item}
                        imgpath={this.state.selected_item.largeImageURL}
                    />
                    : 
                    <SelectedFilm
                        deselect_item={this.deselect_item}
                        filmpath={this.state.selected_item.url}
                    />
            : null
        }


        <div className="content-container">
        {
            this.props.content_folder.content.map((item,i) => {
                return(<div key={"content-container-div" + i}>
                        <ContentItem
                            key={"contentitem" + i}
                            item={item}
                            select_item={this.select_item}
                            folder={this.props.content_folder.name}
                         />  
                    </div>
                );
          })
        }
        </div>
        
        </div>)
    }
}


export default ContentList;