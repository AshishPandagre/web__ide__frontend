import { FileTree } from "../../../redux/editor/fileTreeSlice";

const filterAndSortByName = (content: FileTree, type: string) => {
  return Object.keys(content)
    .filter((key) => content[key].type == type)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
};

export default function useGetSortedFileFolder(content: FileTree) {
  let files = filterAndSortByName(content, "file");
  let folders = filterAndSortByName(content, "folder");
  return { files, folders };
}
