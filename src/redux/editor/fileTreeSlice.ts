import { createSlice } from "@reduxjs/toolkit";
import {
  elements,
  folder_children,
  activeElement,
} from "../../data/fileTreeInitialState";

export interface FolderType {
  id: string;
  type: string;
  name: string;
  parent: string;
  open?: boolean;
}

export interface FileType {
  id: string;
  type: string;
  name: string;
  parent: string;
}

export interface ElementsType {
  [key: string]: FolderType | FileType;
}

export interface FolderChildrenType {
  [key: string]: string[];
}

let initialState = {
  elements,
  folder_children,
  activeElement,
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    addFileFolder: (state) => {},

    renameFileFolder: (state) => {},

    deleteFileFolder: (state) => {},

    openFolder: (state, action) => {
      const element = state.elements[action.payload.id] as FolderType;
      element.open = action.payload.open
    },

    setActiveElement: (state, action) => {
      state.activeElement = action.payload;
    },
  },
});

export default fileTreeSlice.reducer;

export const {
  addFileFolder,
  renameFileFolder,
  deleteFileFolder,
  openFolder,
  setActiveElement,
} = fileTreeSlice.actions;
