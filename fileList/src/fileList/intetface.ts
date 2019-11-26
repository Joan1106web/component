/**
 * 接口,规范数据类型
 */
export interface FileListProps {
    colNumber?: number,
    defaultColNumber?: number,
    data: FileData[],
    onClick?: (fileData: FileData, data?: FileData[]) => void;
}
export interface FileData {
    fileId: number,
    name: string,
    url: string,
    description: string,
    isPerson: number,
    personInformation: PersonInformation
    fileFormat: string
}
export interface PersonInformation {
    author: string,
    age: string,
    position: string,
    hobby: string[],
    address: string,
}
export interface FileListState {
    colNumberGet: number,
    containMinWidth: number,
}
export interface FileBlockProps {
    fileData: FileData,
    onClick?: (fileData: FileData) => void;
}
export interface FileBlocktState {
    // TODO
}