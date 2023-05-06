import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { RiFolderOpenFill } from "react-icons/ri";
import { FileTree } from "../../../redux/editor/fileTreeSlice";
import Directory from "./Directory";

type FolderProps = {
  padding: number;
  name: string;
  content: FileTree;
  open: boolean;
  location: string;
};

const Folder: React.FC<FolderProps> = ({
  padding,
  content,
  name,
  open,
  location,
}) => {
  console.log("[location]", location);

  return (
    <div className="flex flex-col">
      {/* single folder */}
      <div
        className={`flex items-center gap-2 py-[3px] hover:bg-[#2a2d2e]`}
        style={{ paddingLeft: padding * 4 }}
      >
        <div className="flex items-center gap-1">
          <MdArrowForwardIos size={10} className={open ? "rotate-90" : ""} />
          <RiFolderOpenFill fill="#90a4ae" size={20} />
        </div>
        <span>{name}</span>
      </div>
      {/* children of a folder goes here.. */}
      {open && (
        <Directory fileTree={content} padding={padding} location={location} />
      )}
    </div>
  );
};
export default Folder;
