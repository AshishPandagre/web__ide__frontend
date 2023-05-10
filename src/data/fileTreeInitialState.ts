// elements - collectively refers to files & folders.
// elements - contains an object, where every single file folder id is mapped to an object containing it's information
// folder_children - contains an object where keys are the folder ids and a list which represents all the file/folder ids present inside it.

import {
  ElementsType,
  FolderChildrenType,
} from "../redux/editor/fileTreeSlice";

export const elements: ElementsType = {
  "001": {
    type: "file",
    name: "index.html",
    parent: "root",
  },
  "002": {
    type: "file",
    name: "main.html",
    parent: "001",
  },
  "003": {
    type: "file",
    name: "sidebar.html",
    parent: "002",
  },
  "004": {
    type: "file",
    name: "header.html",
    parent: "002",
  },
  "005": {
    type: "file",
    name: "footer.html",
    parent: "003",
  },
  "006": {
    type: "folder",
    name: "src",
    parent: "root",
  },
  "007": {
    type: "folder",
    name: "files",
    parent: "006",
  },
  "008": {
    type: "folder",
    name: "test",
    parent: "root",
  },
};


export const folder_children: FolderChildrenType = {
  root: ["001", "006", "008"],
  "001": ["002"],
  "002": ["003", "004"],
  "003": [],
  "006": ["007"],
  "008": [""],
};
