import React, { Component } from 'react';
import { fileData } from './data/data';
import FileList from '../src/index';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.less';
import '../assets/FileList/style.less';
import './style/index.less';

export default class FileListBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colNumberSet: 5,
      fileDataSet: fileData,
    };
  }

  handleClick = (e, data) => {
    console.log(e, data);
  };

  ChangeData = () => {
    const fileDataSet = fileData.filter(item => item.isPerson && item.personInformation.age > 30);
    this.setState({
      colNumberSet: 1,
      fileDataSet,
    });
  };
  ReductionData = () => {
    const fileDataSet = fileData.filter(item => item);
    this.setState({
      colNumberSet: 3,
      fileDataSet,
    });
  };

  render() {
    const { colNumberSet, fileDataSet } = this.state;
    return (
      <div>
        <FileList
          key={`FileList${fileData.length}`}
          colNumber={colNumberSet}
          data={fileDataSet}
          onClick={this.handleClick}
        />
        <div className={'btnGroup'}>
          <Button type='primary' onClick={this.ChangeData}>修改数据</Button>
          <Button type='default' onClick={this.ReductionData}>还原数据</Button>
        </div>
      </div>
    );
  }
}
