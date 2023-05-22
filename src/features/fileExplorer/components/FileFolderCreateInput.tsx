import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { VscSymbolFile } from "react-icons/vsc";
import {
  addFileFolder,
  setElementCreation,
} from "../../../redux/editor/fileTreeSlice";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../redux/hooks";
import { addTab } from "../../../redux/editor/tabSlice";

interface FileFolderCreateInputProps {
  type: "file" | "folder";
  padding: number;
  parent: string;
}

const FileFolderCreateInput: React.FC<FileFolderCreateInputProps> = ({
  type,
  padding,
  parent,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const inputBlurred = () => {
    if (name) dispatch(addFileFolder({ type, name, parent }));
    dispatch(setElementCreation(null));
  };

  const onkeyup = (e: any) => {
    if (e.key == "Enter") {
      if (name) {
        const id = (Math.floor(Math.random() * 900) + 100).toString();
        dispatch(addFileFolder({ id, type, name, parent }));
        if (type == "file") dispatch(addTab(id));
      }
      dispatch(setElementCreation(null));
    }
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
        onBlur={inputBlurred}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={onkeyup}
      />
    </div>
  );
};

export default FileFolderCreateInput;
