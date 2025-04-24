export interface IFile {
    id: string;
    fileName: string;
    isFolder: boolean;
    content?: string | undefined;
    children?: IFile[]
}