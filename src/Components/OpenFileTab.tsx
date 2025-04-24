import { X } from "lucide-react"
import { IFile } from "../Interfaces/interfaces"
import RenderFileIcon from "./UI/RenderFileIcon"
import { useDispatch, useSelector } from "react-redux"
import { setClickedFile, setOpenedFiles } from "../store/features/fileTreeSlice"
import { RootState } from "../store/store"

interface IProps {
    fileObj: IFile
}


export default function OpenFileTab({ fileObj }: IProps) {

    const dispatch = useDispatch()
    const { openedFiles, clickedFile } = useSelector((state: RootState) => state.fileTreeSlice)

    //--------------------------------handlers-----------------------------------


    const selectedFileObj = {
        fileName: fileObj.fileName,
        fileContent: fileObj.content,
        activeTabId: fileObj.id
    }
    const onClickFileTab = () => {
        dispatch(setClickedFile(selectedFileObj))
    }

    const onRemove = (id: string) => {
        const filtered = openedFiles.filter((file) => file.id != id)
        const lastTab = filtered[filtered.length - 1]
        if (!lastTab) {
            dispatch(setClickedFile({ activeTabId: null, fileName: "", fileContent: "" }))
            dispatch(setOpenedFiles([]))
            return
        }
        dispatch(setClickedFile({ activeTabId: lastTab.id, fileName: lastTab.fileName, fileContent: lastTab.content }))
        dispatch(setOpenedFiles(filtered))
    }

    return (
        <div
            className={`group flex items-center px-3 py-1 text-center ${fileObj.id == clickedFile.activeTabId ? "border-b-2 border-b-red-500 border-x border-x-gray-500/30" : "border-gray-500/30 border"} text-gray-300 cursor-pointer `} key={fileObj.id} onClick={onClickFileTab}>
            <RenderFileIcon fileName={fileObj.fileName} />
            <span className="mx-2"> {fileObj.fileName} </span>
            <X className="text-gray-300/0 group-hover:text-gray-300 duration-300/50 text-sm" onClick={(e) => {
                e.stopPropagation()
                onRemove(fileObj.id)
            }} />
        </div>
    )
}