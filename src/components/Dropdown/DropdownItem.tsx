import React, { ReactElement } from "react";
import { FaPython } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { Template } from "../../utils/supported_templates";

interface PropsType {
  Icon: IconType;
  title: string;
  description: string;
  setItem: (t: Template) => void;
}

const DropdownItem: React.FC<PropsType> = ({
  Icon,
  title,
  description,
  setItem,
}) => {
  return (
    <div
      key={title}
      className="flex items-center w-full justify-between px-4 py-3 rounded-md hover:bg-[#44403c]"
      onClick={() =>
        setItem({
          icon: Icon,
          title,
          description,
        })
      }
    >
      <div className="flex items-center gap-2">
        {/* <FaPython size={30} className="text-white/40" /> */}
        {<Icon size={30} className="text-white/40" />}
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <span className="text-sm text-white/50">{description}</span>
    </div>
  );
};

export default DropdownItem;
