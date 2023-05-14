import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import File from "./File";
import Folder from "./Folder";
import useGetSortedFileFolder from "../hooks/useGetSortedFileFolder";

type DirectoryProps = {
  parent_id: string;
  padding: number;
};

const Directory: React.FC<DirectoryProps> = ({ parent_id, padding }) => {
  const folder_children = useAppSelector(
    (state) => state.fileTree.folder_children
  )[parent_id];
  const elements = useAppSelector((state) => state.fileTree.elements);

  let children_obj = folder_children.map((c_id) => elements[c_id]);
  children_obj = useGetSortedFileFolder(children_obj);

  return (
    <>
      {children_obj.map((obj) => {
        if (obj.type == "file")
          return (
            <File
              parent={parent_id}
              id={obj.id}
              name={obj.name}
              key={obj.id}
              padding={padding + 7}
            />
          );
        else
          return (
            <Folder
              id={obj.id}
              name={obj.name}
              parent={parent_id}
              key={obj.id}
              padding={padding + 3}
            />
          );
      })}
    </>
  );
};

export default Directory;
