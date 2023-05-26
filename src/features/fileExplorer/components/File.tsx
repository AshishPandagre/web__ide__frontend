import React, { useRef } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { setActiveElement } from "../../../redux/editor/fileTreeSlice";
import { addTab } from "../../../redux/editor/tabSlice";
import { FileType } from "../../../redux/editor/types";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ContextMenu from "./ContextMenu";

type FileProps = {
  obj: FileType;
  parent: string;
  padding: number;
  isActive: boolean;
};

const File: React.FC<FileProps> = ({ obj, parent, padding, isActive }) => {
  const dispatch = useAppDispatch();
  const activeTabId = useAppSelector((state) => state.tabs.activeTab);
  const fileRef = useRef<HTMLDivElement>(null);
  const dialogBoxRef = useRef<HTMLDivElement>(null);

  const onClick = (e: React.MouseEvent) => {
    dispatch(setActiveElement(obj.id));
    dispatch(addTab(obj.id));
    e.stopPropagation();
  };

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
