// 公用方法
export const ImagesFormat = {
    DOC: ['doc', 'docx'],
    PNG: ['png', 'psd', 'gif'],
    XLS: ['xls']
}
/**
 * 获取带前缀类名
 * @param {string} cls
 * @param {string} prefix
 * @returns {string}
 */
export function getPrefixCls(cls: string = '', prefix: string = 'file-list') {
    return `${prefix}-${cls}`;
  }
  
export const noop = () => { };