import React, { useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import {
  openFolder,
  setActiveElement,
} from "../../../redux/editor/fileTreeSlice";
import { FolderType } from "../../../redux/editor/types";
import { useAppDispatch } from "../../../redux/hooks";
import ContextMenu from "./ContextMenu";
import Directory from "./Directory";

type FolderProps = {
  obj: FolderType;
  loc: string;
  padding: number;
  isActive: boolean;
};

const Folder: React.FC<FolderProps> = ({ obj, padding, isActive, loc }) => {
  const dispatch = useAppDispatch();
  const folderRef = useRef<HTMLDivElement>(null);
  const folderLoc = loc + '/' + obj.name;

  const onClick = (e: React.MouseEvent) => {
    dispatch(setActiveElement(obj.id));
    dispatch(openFolder({ id: obj.id, open: !obj.open }));
    e.stopPropagation();
  };

  console.log(folderLoc)

  return (
    <div className="flex w-full flex-col">
      <div
        className={`flex items-center gap-2 py-[3px] hover:bg-[#2a2d2e] ${
          isActive && "bg-[#37373d]"
        }`}
        style={{ paddingLeft: padding * 4 }}
        onClick={onClick}
        ref={folderRef}
      >
        <ContextMenu objRef={folderRef} obj={obj} />
        <div className="flex items-center gap-1">
          <MdArrowForwardIos
            size={13}
            className={obj.open ? "rotate-90" : ""}
          />
          {/* <RiFolderOpenFill fill="#90a4ae" size={13} /> */}
        </div>
        <span>{obj.name}</span>
      </div>
      {obj.open && <Directory parent_id={obj.id} padding={padding} loc={folderLoc} />}
    </div>
  );
};
export default Folder;
