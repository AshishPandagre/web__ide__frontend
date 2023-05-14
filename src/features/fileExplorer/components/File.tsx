import path from "path";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import {
  FileType,
  setActiveElement,
} from "../../../redux/editor/fileTreeSlice";
import { useAppDispatch } from "../../../redux/hooks";

type FileProps = {
  obj: FileType;
  parent: string;
  padding: number;
  isActive: boolean;
};

const File: React.FC<FileProps> = ({ obj, parent, padding, isActive }) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setActiveElement(obj.id));
  };

  return (
    <div
      className={`flex items-center gap-2 py-[3px] hover:bg-[#2a2d2e] ${isActive && 'bg-[#37373d]'}`}
      style={{ paddingLeft: padding * 4 }}
      onClick={onClick}
    >
      <AiFillHtml5 size={18} />
      <span>{obj.name}</span>
    </div>
  );
};
export default File;
