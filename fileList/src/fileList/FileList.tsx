import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FileListProps, FileListState } from './intetface';
import { FileBlock } from '../index';
import { noop, getPrefixCls } from './utils';
import cx from 'classnames';

/**
 * 文件容器组件
 * @param {number} [defaultColNumber = 3] - 每行显示图片个数.
 * @param {number} colNumber - 每行显示图片个数受控，外界可控制每行显示数量.
 * @param {(data: FileData[]) => void;} onClick - 点击按钮回调.
 */
export default class FileList extends Component<FileListProps, FileListState> {
    static propTypes = {
        colNumber: PropTypes.number,
        defaultColNumber: PropTypes.number,
        onClick: PropTypes.func,
    }

    static defaultProps = {
        defaultColNumber: 3,
        onClick: noop,
    }

    constructor(props) {
        super(props);
        this.state = {
            colNumberGet: props.colNumber || props.defaultColNumber,
            containMinWidth: 98 * props.colNumber || 98 * props.defaultColNumber,
        };
    }

    /**
     * @param {colNumber} 控制每行显示个数
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.colNumber !== prevState.colNumberGet) {
            let containMinWidth = null;
            if (!isNaN(nextProps.colNumber) && nextProps.colNumber >= 1 && nextProps.colNumber <= 12) {
                containMinWidth = 98 * nextProps.colNumber;
            } else {
                containMinWidth = 98 * 3;
            }
            return {
                colNumberGet: nextProps.colNumber,
                containMinWidth
            };
        }
        return null;
    }

    getMinWidth = (colNumber) => {
        if (!isNaN(colNumber) && colNumber >= 1 && colNumber <= 12) {
            return 98 * colNumber;
        } else {
            return 98 * colNumber;
        }
    }

    renderFile = () => {
        const { data, colNumber } = this.props;
        const { colNumberGet } = this.state;
        let colGet = null;
        if (!isNaN(colNumberGet) && colNumberGet >= 1 && colNumberGet <= 12) {
            colGet = 100 / colNumber;
        } else {
            colGet = 100 / 3;
        }
        const col = cx(getPrefixCls('col'));
        const fileBlockGet = data.map(item => <div className={col} style={{ width: colGet + '%' }}><FileBlock key={`FileBlock${item.fileId}`} fileData={item} onClick={this.handleClick} /></div>)
        return [...fileBlockGet]
    }

    handleClick = (e) => {
        const { data, onClick } = this.props;
        if (typeof onClick === 'function') {
            onClick(e, data);
        }
    }

    render() {
        const { containMinWidth } = this.state;
        const contain = cx(getPrefixCls('contain'));
        return (
            <div className={contain} style={{ minWidth: containMinWidth + 'px' }}>
                {this.renderFile()}
            </div>
        )
    }
}
