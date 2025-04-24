import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../Interfaces/interfaces";

interface IclickedFile {
    fileName: string;
    fileContent: string | undefined
    activeTabId: null | string,

}

interface IInitialState {
    openedFiles: IFile[];
    clickedFile: IclickedFile
}

const initialState: IInitialState = {
    openedFiles: [],
    clickedFile: {
        activeTabId: null,
        fileName: "",
        fileContent: ""
    }
}

const fileTreeSlice = createSlice({
    name: "fileTreeSlice",
    initialState,
    reducers: {
        setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
            state.openedFiles = action.payload
        },
        setClickedFile: (state, action: PayloadAction<IclickedFile>) => {
            state.clickedFile = action.payload
        },

    }
})
export const { setOpenedFiles, setClickedFile } = fileTreeSlice.actions

export default fileTreeSlice.reducer;