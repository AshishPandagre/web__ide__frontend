import React, { useEffect, useRef, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { VscSymbolFile } from "react-icons/vsc";
import {
  addFileFolder,
  setElementCreation,
} from "../../../redux/editor/fileTreeSlice";
import { addTab } from "../../../redux/editor/tabSlice";
import { useAppDispatch } from "../../../redux/hooks";

interface FileFolderCreateInputProps {
  type: "file" | "folder";
  padding: number;
  parent: string;
  loc: string;
}

const FileFolderCreateInput: React.FC<FileFolderCreateInputProps> = ({
  type,
  padding,
  parent,
  loc,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const save = () => {
    if (name) {
      const new_loc = loc + "/" + name;
      const id = (Math.floor(Math.random() * 900) + 100).toString();
      dispatch(addFileFolder({ id, type, name, parent }));
      if (type == "file") dispatch(addTab(id));
    }
    dispatch(setElementCreation(null));
  };

  return (
    <div
      className="flex w-full items-center gap-2 py-[3px]"
      style={{ paddingLeft: padding * 4 }}
    >
      <div>
        {type === "folder" && <MdArrowForwardIos size={13} />}
        {type === "file" && <VscSymbolFile size={13} />}
      </div>
      <input
        ref={inputRef}
        className="w-full bg-[#171719] outline-none ring-2 ring-blue-900"
        onBlur={save}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={(e) => e.key == "Enter" && save()}
      />
    </div>
  );
};

export default FileFolderCreateInput;
