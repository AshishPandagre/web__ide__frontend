// elements - collectively refers to files & folders.
// elements - contains an object, where every single file folder id is mapped to an object containing it's information
// folder_children - contains an object where keys are the folder ids and a list which represents all the file/folder ids present inside it.

import { FolderChildrenType, ElementCreationType, ElementsType } from "../redux/editor/types";

export const folder_children: FolderChildrenType = {
  root: ["001", "006", "008", "009", "010", "011", "012", "013", "014", "015"],
  "001": ["002"],
  "002": ["003", "004"],
  "003": ["005"],
  "006": ["007"],
  "007": [],
  "008": [],
};

export const elementCreation: ElementCreationType = null

export const activeElement = "root"

export const elements: ElementsType = {
  "root": {
    id: "root",
    type: "folder",
    name: "root",
    parent: "root"
  },
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
    name: "header.js",
    parent: "002",
  },
  "005": {
    id: "005",
    type: "file",
    name: "footer.js",
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
    name: "index.js",
    parent: "root",
    type: "file",
  },
  "010": {
    id: "010",
    name: "index10.js",
    parent: "root",
    type: "file"
  },
  "011": {
    id: "011",
    name: "index11.js",
    parent: "root",
    type: "file"
  },
  "012": {
    id: "012",
    name: "index12.js",
    parent: "root",
    type: "file"
  },
  "013": {
    id: "013",
    name: "index13.js",
    parent: "root",
    type: "file"
  },
  "014": {
    id: "014",
    name: "index14.js",
    parent: "root",
    type: "file"
  },
  "015": {
    id: "015",
    name: "index15.js",
    parent: "root",
    type: "file"
  },
};
