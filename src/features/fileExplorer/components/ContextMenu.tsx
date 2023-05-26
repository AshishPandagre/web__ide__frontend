import React, { useRef } from "react";
import { RefObject, useEffect, useState } from "react";
import { FileType, FolderType } from "../../../redux/editor/types";
import useContextMenu from "../hooks/useContextMenu";
import { useAppDispatch } from "../../../redux/hooks";
import { setElementCreation } from "../../../redux/editor/fileTreeSlice";

type ContextMenuProps = {
  objRef: RefObject<HTMLDivElement>;
  obj: FileType | FolderType;
};

type SingleMenuProps = {
  title: string;
  onclick: () => void;
};

const SingleMenu: React.FC<SingleMenuProps> = ({ title, onclick }) => {
  return (
    <div
      className="w-full rounded-md bg-[#282828]  py-2 pl-4 text-left hover:bg-[#3498db]"
      onClick={(e) => {
        e.preventDefault()
        onclick()
      }}
    >
      {title}
    </div>
  );
};

const ContextMenu: React.FC<ContextMenuProps> = ({ objRef, obj }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  let { dialogActive, dialogX, dialogY } = useContextMenu(objRef, obj, dialogRef);
  const dispatch = useAppDispatch();

  const createNewFolder = () => {
    dispatch(setElementCreation({ type: "folder", element: obj.id }));
  };

  const createNewFile = () => {
    dispatch(setElementCreation({ type: "file", element: obj.id }));
  };

  return (
    <>
      {dialogActive && (
        <div
          className="absolute z-50 flex w-52 flex-col items-start gap-1 rounded-md bg-[#282828] p-1 outline-none"
          tabIndex={0}
          style={{ left: dialogX, top: dialogY }}
          ref={dialogRef}
        >
          {obj.type === "folder" && (
            <>
              <SingleMenu
                title="Create new folder.."
                onclick={createNewFolder}
              />
              <SingleMenu title="Create new file.." onclick={createNewFile} />
            </>
          )}
          <SingleMenu title="Rename" onclick={() => {}} />
          <SingleMenu title="Delete" onclick={() => {}} />
        </div>
      )}
    </>
  );
};
export default ContextMenu;
