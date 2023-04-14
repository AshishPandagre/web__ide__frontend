import React, { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons/lib";
import { ActivityBarType } from "./ActivityBar";

interface SingleItemProps {
  isActive: boolean;
  setActive: Dispatch<SetStateAction<ActivityBarType>>;
  Icon: IconType;
}

const SingleItem: React.FC<SingleItemProps> = ({
  isActive,
  setActive,
  Icon,
}) => {
  return (
    <div
      className={`flex cursor-pointer justify-center text-center ${
        isActive && "border-l-2"
      }`}
      onClick={() => setActive("file-explorer")}
    >
      <Icon size={25} className={`h-12 ${!isActive && "opacity-40"}`} />
    </div>
  );
};

export default SingleItem;
