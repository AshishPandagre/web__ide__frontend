import React from "react";
import { IoClose } from "react-icons/io5";
import { IconType } from "react-icons/lib";

type SingleTabProps = {
  Icon: IconType;
  title: string;
  active: boolean;
};

const SingleTab: React.FC<SingleTabProps> = ({ Icon, title, active }) => {
  return (
    <div
      className={`group flex w-fit items-center gap-2 p-2 ${
        active
          ? "border-t-2 border-red-400 bg-[#1e1e1e]"
          : "bg-[#2d2d2d] text-[#acacac] hover:bg-[#292929]"
      }`}
    >
      <Icon size={17} />
      <p>{title}</p>
      <IoClose
        fill="white"
        size={17}
        className={`rounded-sm fill-[#818181] hover:bg-[#404040] hover:fill-[#cecece] ${
          !active && "invisible group-hover:visible"
        }`}
      />
    </div>
  );
};
export default SingleTab;
