import { DownIcon, RightIcon } from "./Icons";
import { IFile } from "../../Interfaces/interfaces";
import { useState } from "react";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFile, setOpenedFiles } from "../../store/features/fileTreeSlice";
import { RootState } from "../../store/store";

interface IProps {
  fileTree: IFile
}


export default function RecursiveFileComp({ fileTree }: IProps) {

  //----------------------------------states------------------------------------------

  const dispatch = useDispatch()
  const { openedFiles } = useSelector((state: RootState) => state.fileTreeSlice)

  const [isOpen, setIsOpen] = useState<boolean>(true)

  //----------------------------------handlers------------------------------------------

  function handleFolderToggle() {
    setIsOpen((prev) => !prev)
  }

  function onFileClicking(openedFiles: IFile[], fileTree: IFile) {
    const exist = openedFiles.some((fileObj) => fileObj.id === fileTree.id)
    dispatch(setClickedFile({ fileName: fileTree.fileName, fileContent: fileTree.content, activeTabId: fileTree.id }))
    if (exist) return
    dispatch(setOpenedFiles([...openedFiles, fileTree]))

  }
  // dispatch(setOpenedFiles([...openedFiles, fileTree]))

  return (
    <div className="mb-4 ms-3 cursor-pointer">
      <div className="flex items-center mb-2" onClick={handleFolderToggle}>

        {fileTree.isFolder ?
          isOpen ?
            <div className="flex items-center">
              <DownIcon />
              <span className=" text-amber-400"> <RenderFileIcon fileName={fileTree.fileName} isFolder={fileTree.isFolder} isOpen={isOpen} />
              </span>
              <span className="ms-2">{fileTree.fileName}</span>
            </div>
            :
            <div className="flex items-center">
              <RightIcon />
              <RenderFileIcon fileName={fileTree.fileName} isFolder={fileTree.isFolder} isOpen={isOpen} />
              <span className="ms-2">{fileTree.fileName}</span>
            </div>
          :
          <div className="flex items-center" onClick={() => onFileClicking(openedFiles, fileTree)}>
            <RightIcon />
            <RenderFileIcon fileName={fileTree.fileName} />
            <span className="ms-2">{fileTree.fileName}</span>
          </div>
        }

      </div>

      {isOpen && fileTree.children && fileTree.children.map((file, idx) => {
        return <RecursiveFileComp key={idx} fileTree={file} />
      })}
    </div>
  )
}