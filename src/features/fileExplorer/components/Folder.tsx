import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { RiFolderOpenFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Directory from "./Directory";
import {
  FolderType,
  openFolder,
  setActiveElement,
} from "../../../redux/editor/fileTreeSlice";

type FolderProps = {
  obj: FolderType;
  parent: string;
  padding: number;
  isActive: boolean;
};

const Folder: React.FC<FolderProps> = ({ obj, parent, padding, isActive }) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setActiveElement(obj.id));
    dispatch(openFolder({ id: obj.id, open: !obj.open }));
  };

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center gap-2 py-[3px] hover:bg-[#2a2d2e] ${
          isActive && "bg-[#37373d]"
        }`}
        style={{ paddingLeft: padding * 4 }}
        onClick={onClick}
      >
        <div className="flex items-center gap-1">
          <MdArrowForwardIos
            size={10}
            className={obj.open ? "rotate-90" : ""}
          />
          <RiFolderOpenFill fill="#90a4ae" size={20} />
        </div>
        <span>{obj.name}</span>
      </div>
      {obj.open && <Directory parent_id={obj.id} padding={padding} />}
    </div>
  );
};
export default Folder;
