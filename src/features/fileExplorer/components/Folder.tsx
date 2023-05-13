import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { RiFolderOpenFill } from "react-icons/ri";
import { useAppSelector } from "../../../redux/hooks";
import Directory from "./Directory";

type FolderProps = {
  name: string;
  parent: string;
  id: string;
  padding: number;
};

const Folder: React.FC<FolderProps> = ({ name, parent, id, padding }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center gap-2 py-[3px] hover:bg-[#2a2d2e]`}
        style={{ paddingLeft: padding * 4 }}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-1">
          <MdArrowForwardIos size={10} className={open ? "rotate-90" : ""} />
          <RiFolderOpenFill fill="#90a4ae" size={20} />
        </div>
        <span>{name}</span>
      </div>
      {open && <Directory parent_id={id} padding={padding} />}
    </div>
  );
};
export default Folder;
