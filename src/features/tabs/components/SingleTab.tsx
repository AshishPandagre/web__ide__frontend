import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import {
  FileType,
  FolderType,
  openFolder,
  setActiveElement,
} from "../../../redux/editor/fileTreeSlice";
import { closeTab, setActiveTab } from "../../../redux/editor/tabSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

type SingleTabProps = {
  tab: FolderType | FileType;
  active: boolean;
};

const SingleTab: React.FC<SingleTabProps> = ({ tab, active }) => {
  const dispatch = useAppDispatch();
  const elements = useAppSelector((state) => state.fileTree.elements);

  const onClose = () => {
    dispatch(closeTab(tab.id))
  }

  const onClick = () => {
    dispatch(setActiveTab(tab.id));
    dispatch(setActiveElement(tab.id));

    let parent = tab.parent;
    if (parent == "root") return;

    do {
      console.log("[opening]", parent);
      dispatch(openFolder({ id: parent, open: true }));
      let parent_obj = elements[parent];
      parent = parent_obj.parent;
    } while (parent != "root");
  };

  return (
    <div
      className={`group flex w-fit items-center gap-2 p-2 ${
        active
          ? "border-t-2 border-red-400 bg-[#1e1e1e]"
          : "bg-[#2d2d2d] text-[#acacac] hover:bg-[#292929]"
      }`}
      onClick={onClick}
    >
      <AiFillHtml5 size={17} />
      <p>{tab.name}</p>
      <IoClose
        fill="white"
        size={17}
        className={`rounded-sm fill-[#818181] hover:bg-[#404040] hover:fill-[#cecece] ${
          !active && "invisible group-hover:visible"
        }`}
        onClick={onClose}
      />
    </div>
  );
};
export default SingleTab;
