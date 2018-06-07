import React, { Component } from 'react';
const key = require('../key');

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            selected_item: null,
            item_is_selected: false
        }
    }
    static getDerivedStateFromProps(props,state){
        //return props;
        console.log('p:',props);
        console.log('s:',state);
        let content = [];
        fetch(`https://pixabay.com/api/?key=${key.pixabay}&q=${props.selected_folder}`).then((results) => {
            results.json().then((data) => {
                data.hits.forEach((item) => {
                    console.log(item)
                    let current_item = { 
                        largeImageURL: item.largeImageURL,
                        user: item.user,
                        previewURL: item.previewURL,
                        width: item.imageWidth,
                        height: item.imageHeight,
                        likes: item.likes
                    }
                    content.push(current_item);
                })

                state.content = content;
                return state;
            })
        })
    }
    select_item(item){
        this.setState({ selected_item: item, item_is_selected: true })
    }
    deselect_item(){
        this.setState({ selected_item: null, item_is_selected: false})
    }
    render() { console.log(this.state.item_is_selected)
        return (<div className="home-content">
            <p className="content-header">CONTENT: {(this.props.selected_folder).toUpperCase()}</p>

           {  
                this.state.item_is_selected?
                <div>
                    <button 
                        className="close-selected"
                        onClick={() => this.deselect_item()}
                    > X </button>
                    <div className="selected-item">
                        <img
                            className="selected-img"
                            src={this.state.selected_item}
                        /> 
                    </div>
                </div>
                : null 

            }
            <div className="content-container">

            {
                this.state.content.map((item) => {
                    return(
                        <div 
                            className="content-item"
                            onClick={() => this.select_item(item.largeImageURL)} 
                        >
                            <img 
                                src={item.previewURL}
                                width="64px"
                                height="64px"
                                alt={this.props.selected_folder}
                            />
                            <div className="original-poster">
                                <strong>
                                    <p>{item.user}</p>
                                </strong>
                                {
                                    item.width > 1200? 
                                    <p>HD image</p> : <p>image</p>
                                }
                                <p>{item.width} X {item.height}</p>

                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>)
    }
}
 
export default HomeContent;
// largeImageURL: item.largeImageURL,
// user: item.user,
// previewURL: item.previewURL,
// width: item.imageWidth,
// height: item.imageHeight,
// likes: item.likes