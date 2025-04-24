import { useSelector } from "react-redux"
import OpenFilesBar from "./Components/OpenFilesBar"
import ResizablePanel from "./Components/ResizablePanel"
import RecursiveFileComp from "./Components/UI/RecursiveFileComp"
import { fileTree } from "./Data/fileTree"
import { RootState } from "./store/store"
import Preview from "./Components/Preview"




function App() {
  const { openedFiles } = useSelector((state: RootState) => state.fileTreeSlice)

  return (
    <div className="bg-[#030C1B] h-screen text-white flex space-x-16">


      <ResizablePanel leftPanel={<RecursiveFileComp fileTree={fileTree} />}
        rightPanel={openedFiles.length ? <OpenFilesBar /> : <Preview />
        } />

    </div>
  )
}

export default App
