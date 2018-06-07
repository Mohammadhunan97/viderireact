import React, { Component } from 'react';
import Folder from "../folder.png";
import FolderSelected from "../folderselected.png";
import axios from 'axios';
import ContentList from './ContentList';
const key = require("../key");

class FolderDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            folders: [
                {
                    name: 'clouds',
                    type: 'photo',
                    content: []
                },
                {
                    name: 'cars',
                    type: 'photo',
                    content: []
                },
                {
                    name: 'Urban',
                    type: 'photo',
                    content: []
                },
                {
                    name: 'nyc',
                    type:'film',
                    content: []
                }
            ],
            selected_folder: 'clouds', //used to turn selected folder blue
            selected_folder_index: 0 //used to give props to child component
        }
    }
    componentDidMount(){
        this.state.folders.forEach((folder) => {
            if(folder.type === "photo"){
               this.getPhoto(folder.name)
            }else if(folder.type === "film"){
                this.getFilm(folder.name);
            }
        })
        
    }
    getPhoto(foldername){
        axios.get(`https://pixabay.com/api/?key=${key.pixabay}&q=${foldername}`).then((data) =>{
            let content = [];
            data.data.hits.forEach((hit) => {
                let current_item = this.createPhotoFromHit(hit);
                content.push(current_item);
            })
            this.setContentForFolder(foldername, content);
        })
    }
    getFilm(foldername){
        axios.get(`https://pixabay.com/api/videos/?key=${key.pixabay}&q=${foldername}`).then((data) => {
            Promise.all(data.data.hits.map(data => {
                return fetch(`https://i.vimeocdn.com/video/${data.picture_id}_100x75.jpg`).then((res) => {
                    return {
                        user: data.user,
                        duration: data.duration,
                        previewURL: res.url,
                        width: data.videos.large.width,
                        height: data.videos.large.height,
                        url: data.videos.large.url,
                        type: "film"
                    }
                })
            })).then((content) => {
                this.setContentForFolder(foldername, content);
            })
        })
    }
    createPhotoFromHit(item){
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
    setContentForFolder(foldername,content){
        let folders = this.state.folders;
        folders.forEach((folder) => {
            if(folder.name === foldername){
                folder.content = content;
            }
        })
        this.setState({ folders,})
    }
    selectFolder(name,index){
        this.setState({ selected_folder: name, selected_folder_index: index})
    }
    render(){
        return(<div className="folder-display">
            <div className="folders-container">
            {
                this.state.folders.map((folderitem,i) => {
                    return(<div 
                        className="folder-item"
                        onClick={() => this.selectFolder(folderitem.name, i)}
                        key={"div" + folderitem.name}
                        >
                    {
                        this.state.selected_folder === folderitem.name? 
                        <img 
                            src={FolderSelected}
                            alt={folderitem.name}
                            className="folder"
                            key={"img" + folderitem.name}
                        /> :
                        <img 
                            src={Folder}
                            alt={folderitem.name}
                            className="folder"
                            key={"img" + folderitem.name}
                        />
                
                    } 
                        <p key={"p" + folderitem.name}>{folderitem.name}</p>
                    </div>)
                })
            }
            </div>
            <ContentList 
                content_folder={this.state.folders[this.state.selected_folder_index]} 
            />     
        </div>)
    }
}

export default FolderDisplay;