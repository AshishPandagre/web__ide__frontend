import React from "react";
import { setActiveElement } from "../../../redux/editor/fileTreeSlice";
import { useAppDispatch } from "../../../redux/hooks";
import Directory from "./Directory";

type FileTreeProps = {};

const FileTree: React.FC<FileTreeProps> = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setActiveElement("root"));
  };

  return (
    <div className="text-sm h-full" onClick={onClick}>
      <Directory parent_id="root" padding={0} loc="" />
    </div>
  );
};
export default FileTree;
