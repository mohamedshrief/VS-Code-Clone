
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import OpenFileTab from "./OpenFileTab"


export default function OpenFilesBar() {
    const { clickedFile } = useSelector((state: RootState) => state.fileTreeSlice)

    const { openedFiles } = useSelector((state: RootState) => state.fileTreeSlice)
    return (
        <div >
            <div className="flex items-baseline w-full border border-gray-400/30">
                {openedFiles.map((fileObj) => {
                    return <OpenFileTab key={fileObj.id} fileObj={fileObj} />
                })}
            </div>
            <div>
                {clickedFile.fileContent}
            </div>
            {/* <ContentSyntaxHighlighter content={clickedFile.fileContent} /> */}
        </div>
    )
}