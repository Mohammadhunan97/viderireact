import React, { Component } from 'react';
import Folder from "../folder.png";
import FolderSelected from "../folderselected.png";
import HomeContent from "./HomeContent";

class FolderDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            folders: [
                {
                    name: 'clouds',
                    content: []
                },
                {
                    name: 'cars',
                    content: []
                },
                {
                    name: 'Urban',
                    content: []
                }
            ],
            selected_folder: 'clouds'
        }
    }
    selectFolder(name){
        this.setState({ selected_folder: name})
    }
    render(){
        return(<div className="folder-display">
            <div className="folders-container">
            {
                this.state.folders.map((folderitem) => {
                    return(<div 
                        className="folder-item"
                        onClick={() => this.selectFolder(folderitem.name)}
                        key={"div" + folderitem.name}
                        >
                    {
                        this.state.selected_folder == folderitem.name? 
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
            <HomeContent selected_folder={this.state.selected_folder}/>
        </div>)
    }
}

export default FolderDisplay;