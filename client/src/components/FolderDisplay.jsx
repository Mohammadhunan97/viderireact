import React, { Component } from 'react';
import Folder from "../folder.png";
import FolderSelected from "../folderselected.png";

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
                    return(<div className="folder-item" onClick={() => this.selectFolder(folderitem.name)}>
                    {
                        this.state.selected_folder == folderitem.name? 
                        <img 
                            src={FolderSelected}
                            alt={folderitem.name}
                            className="folder"
                        /> :
                        <img 
                            src={Folder}
                            alt={folderitem.name}
                            className="folder"
                        />
                
                    } 
                        <p>{folderitem.name}</p>
                    </div>)
                })
            }
            </div>
        </div>)
    }
}

export default FolderDisplay;