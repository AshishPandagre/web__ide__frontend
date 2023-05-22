import path from "path";
import React, { useEffect } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { IconType } from "react-icons/lib";
import {
  FileType,
  setActiveElement,
} from "../../../redux/editor/fileTreeSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addTab, setActiveTab } from "../../../redux/editor/tabSlice";

type FileProps = {
  obj: FileType;
  parent: string;
  padding: number;
  isActive: boolean;
};

const File: React.FC<FileProps> = ({ obj, parent, padding, isActive }) => {
  const dispatch = useAppDispatch();
  const activeTabId = useAppSelector(state => state.tabs.activeTab)

  const onClick = (e: React.MouseEvent) => {
    dispatch(setActiveElement(obj.id));
    dispatch(addTab(obj.id));
    e.stopPropagation()
  };

  return (
    <div
      className={`flex items-center gap-2 py-[3px] hover:bg-[#2a2d2e] ${
        isActive && "bg-[#37373d]"
      }`}
      style={{ paddingLeft: padding * 4 }}
      onClick={onClick}
    >
      <IoLogoJavascript size={13} />
      <span>{obj.name}</span>
    </div>
  );
};
export default File;
