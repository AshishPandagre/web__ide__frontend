import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import Directory from "./Directory";

type FileTreeProps = {};

const FileTree: React.FC<FileTreeProps> = () => {
  const fileTree = useAppSelector((state) => state.fileTree);

  return (
    <div className="text-sm">
      <Directory fileTree={fileTree} padding={0} location="" />
    </div>
  );
};
export default FileTree;
