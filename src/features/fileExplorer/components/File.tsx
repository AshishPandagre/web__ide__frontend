import React, { useRef } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { setActiveElement } from "../../../redux/editor/fileTreeSlice";
import { addTab } from "../../../redux/editor/tabSlice";
import { FileType } from "../../../redux/editor/types";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ContextMenu from "./ContextMenu";

type FileProps = {
  obj: FileType;
  padding: number;
  isActive: boolean;
  loc: string
};

const File: React.FC<FileProps> = ({ obj, padding, isActive, loc }) => {
  const dispatch = useAppDispatch();
  const fileRef = useRef<HTMLDivElement>(null);
  const fileLoc = loc + '/' + obj.name;

  const onClick = (e: React.MouseEvent) => {
    dispatch(setActiveElement(obj.id));
    dispatch(addTab(obj.id));
    e.stopPropagation();
  };

  console.log(fileLoc);

  return (
    <div
      className={`flex items-center gap-2 py-[3px] hover:bg-[#2a2d2e] ${
        isActive && "bg-[#37373d]"
      }`}
      style={{ paddingLeft: padding * 4 }}
      onClick={onClick}
      ref={fileRef}
    >
      <ContextMenu objRef={fileRef} obj={obj} />
      <IoLogoJavascript size={13} />
      <span>{obj.name}</span>
    </div>
  );
};
export default File;
