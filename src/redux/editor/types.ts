
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
  
  export type ElementCreationType = {
    type: string;
    parent: string;
  } | null;
  