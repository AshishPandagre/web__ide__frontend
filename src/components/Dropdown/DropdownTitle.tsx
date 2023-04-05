import React, { ReactElement } from "react";
import { IconType } from "react-icons/lib";
import { RiArrowDropDownLine } from "react-icons/ri";

interface PropsType {
  title: string;
  Icon: IconType;
  open: boolean;
}

const DropdownTitle: React.FC<PropsType> = ({ title, Icon, open }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        {<Icon size={30} />}
        <span className="text-xl">{title}</span>
      </div>
      <RiArrowDropDownLine
        size={30}
        className={`text-white/40 ${!open ? "" : "rotate-180"}`}
      />
    </div>
  );
};

export default DropdownTitle;
