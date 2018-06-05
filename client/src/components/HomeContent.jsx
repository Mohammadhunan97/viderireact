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
                    let current_item = { 
                        largeImageURL: item.largeImageURL,
                        user: item.user,
                        previewURL: item.previewURL
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
                <div className="selected-item">
                    <a href="#" onClick={() => this.deselect_item()}>close</a>
                    <img
                        className="selected-img"
                        src={this.state.selected_item}
                    /> 
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
                            <p className="original-poster">{item.user}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>)
    }
}
 
export default HomeContent;
