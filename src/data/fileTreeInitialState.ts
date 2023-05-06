import { FileTree } from "../redux/editor/fileTreeSlice";

let fileTree: FileTree = {
  "index.html": { type: "file" },
  "main.html": { type: "file" },
  src: {
    type: "folder",
    open: true,
    children: {
      components: {
        type: "folder",
        open: true,
        children: {
          "Header.ts": { type: "file" },
          "Footer.ts": { type: "file" },
        },
      },
      pages: {
        type: "folder",
        open: true,
        children: {
          "Home.tsx": { type: "file" },
          "About.tsx": { type: "file" },
          routes: {
            type: "folder",
            open: true,
            children: {
              "main.html": { type: "file" },
              tests: { type: "folder", open: false, children: {} },
            },
          },
        },
      },
    },
  },
};

export default fileTree;
