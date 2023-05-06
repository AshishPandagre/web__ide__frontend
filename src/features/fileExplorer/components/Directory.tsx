// renders the current directory.

import React from "react";
import Folder from "./Folder";
import File from "./File";
import useGetSortedFileFolder from "../hooks/useGetSortedFileFolder";
import { FileTree as FileTreeType } from "../../../redux/editor/fileTreeSlice";

type DirectoryProps = {
  fileTree: FileTreeType;
  padding: number;
  location: string
};

const Directory: React.FC<DirectoryProps> = ({ fileTree, padding, location }) => {
  const { files, folders } = useGetSortedFileFolder(fileTree);

  return (
    <>
      {folders.map((name) => (
        //@ts-ignore
        <Folder name={name} padding={padding+3} content={fileTree[name].children} open={fileTree[name].open} location={`${location}/${name}`} />
      ))}
      {files.map((name) => (
        <File padding={padding+7} name={name} location={`${location}/${name}`} />
      ))}
    </>
  );
};
export default Directory;
