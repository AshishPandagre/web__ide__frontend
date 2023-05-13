import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import File from "./File";
import Folder from "./Folder";
import Directory from "./Directory";

type FileTreeProps = {};

const FileTree: React.FC<FileTreeProps> = () => {
  return (
    <div className="text-sm">
      <Directory parent_id="root" padding={0} />
    </div>
  );
};
export default FileTree;
