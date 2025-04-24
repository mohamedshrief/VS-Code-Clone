import { FileIcon, FolderIcon, OpenedFolderIcon } from "./Icons";

interface IProps {
    fileName: string
    isFolder?: boolean
    isOpen?: boolean
}


export default function RenderFileIcon({ fileName, isFolder, isOpen }: IProps) {
    const extension = fileName.split(".").pop()

    if (isFolder) {
        switch (extension) {
            case "node_modules":
                return isOpen ?
                    <img src="../../../public/icons/folder-node-open.svg" alt="" className="w-5 h-5" />
                    :
                    <img src="../../../public/icons/folder-node.svg" alt="" className="w-5 h-5" />
                    ;
                break;
            case "public":
                return isOpen ?
                    <img src="../../../public/icons/folder-public-open.svg" alt="" className="w-5 h-5" />
                    :
                    <img src="../../../public/icons/folder-public.svg" alt="" className="w-5 h-5" />
                    ;
                break;
            case "src":
                return isOpen ?
                    <img src="../../../public/icons/folder-src-open.svg" alt="" className="w-5 h-5" />
                    :
                    <img src="../../../public/icons/folder-src.svg" alt="" className="w-5 h-5" />
                    ;
                break;
            case "components":
                return isOpen ?
                    <img src="../../../public/icons/folder-components-open.svg" alt="" className="w-5 h-5" />
                    :
                    <img src="../../../public/icons/folder-components.svg" alt="" className="w-5 h-5" />
                    ;
                break;
            default:
                return isOpen ?
                    <OpenedFolderIcon />
                    :
                    <FolderIcon />
                    ;
        }
    } else {
        switch (extension) {
            case "html":
                return <img src="icons/html.svg" alt="" className="w-5 h-5" />;
                break;
            case "css":
                return <img src="icons/css.svg" alt="" className="w-5 h-5" />;
                break;
            case "js":
                return <img src="icons/javascript.svg" alt="" className="w-5 h-5" />;
                break;
            case "jsx":
                return <img src="icons/react.svg" alt="" className="w-5 h-5" />;
                break;
            case "tsx":
                return <img src="icons/react_ts.svg" alt="" className="w-5 h-5" />;
                break;
            case "ts":
                return <img src="icons/typescript.svg" alt="" className="w-5 h-5" />;
                break;
            default:
                return <FileIcon />;

        }
    }


}