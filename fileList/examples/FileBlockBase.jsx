import React, { Component } from 'react';
import { fileData } from './data/data';
import { FileBlock } from '../src/index';

export default class FileBlockBase extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = (e) => {
        console.log(e)
    }

    render() {
        return (
            <div>
                <FileBlock key={`FileBlock${fileData.fileId}`} fileData={fileData[0]}  onClick={this.handleClick}/>
            </div>
        )
    }
}
