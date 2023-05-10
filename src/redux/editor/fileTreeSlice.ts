import { createSlice } from "@reduxjs/toolkit";
import { elements, folder_children } from "../../data/fileTreeInitialState";

export interface ElementType {
  type: string;
  name: string;
  parent: string;
}

export interface ElementsType {
  [key: string]: ElementType;
}

export interface FolderChildrenType {
  [key: string]: string[];
}

let initialState = {
  elements,
  folder_children,
};

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
