import { createSlice } from "@reduxjs/toolkit";
import {
  elements,
  folder_children,
  activeElement,
  elementCreation,
} from "../../data/fileTreeInitialState";
import { FolderType } from "./types";

let initialState = {
  elements,
  folder_children,
  activeElement,
  elementCreation,
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setElementCreation: (state, action) => {
      if (action.payload == null) state.elementCreation = null;
      else {
        const type = action.payload;
        let parent = state.activeElement;
        if (state.elements[parent].type == "file")
          parent = state.elements[parent].parent;
        else {
          const parent_folder = state.elements[parent] as FolderType;
          parent_folder.open = true;
        }
        state.elementCreation = { type, parent };
      }
    },

    addFileFolder: (state, action) => {
      const { type, name, parent, id } = action.payload;
      state.elements[id] = { id, type, name, parent };
      state.folder_children[parent].push(id);
      if (type == "folder") {
        state.folder_children[id] = [];
        const new_folder = state.elements[id] as FolderType;
        new_folder.open = true;
      }
      state.activeElement = id;
    },

    renameFileFolder: (state) => {},

    deleteFileFolder: (state) => {},

    openFolder: (state, action) => {
      const element = state.elements[action.payload.id] as FolderType;
      if (element) element.open = action.payload.open;
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
  setElementCreation,
} = fileTreeSlice.actions;
