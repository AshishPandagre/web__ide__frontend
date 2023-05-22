import { FolderType, FileType } from "../../../redux/editor/types";

const filterAndSortByName = (content: (FolderType | FileType)[], type: string) => {
  return content
    .filter((c) => c.type == type)
    .sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
};

export default function useGetSortedFileFolder(content: (FolderType | FileType)[]) {
  let files = filterAndSortByName(content, "file");
  let folders = filterAndSortByName(content, "folder");
  return {folders, files};
}
