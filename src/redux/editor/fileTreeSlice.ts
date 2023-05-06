import { createSlice } from "@reduxjs/toolkit";
import fileTree from "../../data/fileTreeInitialState";

export interface File {
  type: "file";
}

export interface Folder {
  type: "folder";
  children: FileTree;
  open: boolean;
}

export interface FileTree {
  [fileName: string]: File | Folder;
}

let initialState: FileTree = fileTree;

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    addFileFolder: (state) => {},
    renameFileFolder: (state) => {},
    deleteFileFolder: (state) => {},
    toggleOpenFolder: (state) => {},
  },
});

export default fileTreeSlice.reducer;

export const { addFileFolder, renameFileFolder, deleteFileFolder } =
  fileTreeSlice.actions;
