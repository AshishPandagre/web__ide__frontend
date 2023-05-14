// elements - collectively refers to files & folders.
// elements - contains an object, where every single file folder id is mapped to an object containing it's information
// folder_children - contains an object where keys are the folder ids and a list which represents all the file/folder ids present inside it.

import {
  ElementsType,
  FolderChildrenType,
} from "../redux/editor/fileTreeSlice";

export const folder_children: FolderChildrenType = {
  root: ["001", "006", "008", "009"],
  "001": ["002"],
  "002": ["003", "004"],
  "003": ["005"],
  "006": ["007"],
  "007": [],
  "008": [],
};

export const activeElement = "001"

export const elements: ElementsType = {
  "001": {
    id: "001",
    type: "folder",
    name: "tooth",
    parent: "root",
  },
  "002": {
    id: "002",
    type: "folder",
    name: "gums",
    parent: "001",
  },
  "003": {
    id: "003",
    type: "folder",
    name: "sidebars",
    parent: "002",
  },
  "004": {
    id: "004",
    type: "file",
    name: "header.html",
    parent: "002",
  },
  "005": {
    id: "005",
    type: "file",
    name: "footer.html",
    parent: "003",
  },
  "006": {
    id: "006",
    type: "folder",
    name: "src",
    parent: "root",
  },
  "007": {
    id: "007",
    type: "folder",
    name: "files",
    parent: "006",
  },
  "008": {
    id: "008",
    type: "folder",
    name: "test",
    parent: "root",
  },
  "009": {
    id: "009",
    name: "index.html",
    parent: "root",
    type: "file",
  },
};
