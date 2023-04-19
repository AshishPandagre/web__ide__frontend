import { Editor, useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";
import useCustomTheme from "../hooks/useCustomTheme";

const EditorComponent = () => {
  useCustomTheme();

  return (
    <Editor
      defaultLanguage="javascript"
      defaultValue="console.log('hello world')"
      options={{
        fontSize: 18,
        minimap: {
          enabled: false,
        },
      }}
    />
  );
};

export default EditorComponent;
