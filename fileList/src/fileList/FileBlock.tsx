import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FileBlockProps, FileBlocktState } from './intetface';
import { noop, ImagesFormat, getPrefixCls } from './utils';
import cx from 'classnames';
import docIcon from '../../assets/images/doc.png';
import noneIcon from '../../assets/images/none.png';
import imgIcon from '../../assets/images/img.png';
import xlsIcon from '../../assets/images/xls.png';


/**
 * 文件展示组件
 * @param {(fileData: FileData) => void;} onClick - 点击图片回调.
 */
export default class FileBlock extends Component<FileBlockProps, FileBlocktState> {
    static propTypes = {
        onClick: PropTypes.func,
    }
    static defaultProps = {
        onClick: noop,
    }
    constructor(props) {
        super(props);
        this.state = {};
    }

    showIcon = () => {
        const { fileData } = this.props;
        let iconGet = '';
        const imagesFormatGet = Object.keys(ImagesFormat).filter(attr => ImagesFormat[attr].indexOf(fileData.fileFormat) !== -1).join('');
        if (imagesFormatGet === 'PNG') {
            iconGet = imgIcon
        } else if (imagesFormatGet === 'DOC') {
            iconGet = docIcon
        } else if (imagesFormatGet === 'XLS') {
            iconGet = xlsIcon
        } else {
            iconGet = noneIcon
        }
        return iconGet;
    }

    handleClick = () => {
        const { fileData, onClick } = this.props;
        if (typeof onClick === 'function') {
            onClick(fileData);
        }
    }

    render() {
        const { fileData } = this.props;
        const icon = this.showIcon();
        const contain = cx(getPrefixCls('block-contain'));
        const content = cx(getPrefixCls('block-content'));
        const imgBlock = cx(getPrefixCls('block-img-block'));
        return (
            <div className={contain}>
                <div className={content}>
                    <div className={imgBlock}>
                        <img src={icon} onClick={this.handleClick} />
                    </div>
                    <p title={fileData.name}>{fileData.name}</p>
                </div>
            </div>
        )
    }
}
