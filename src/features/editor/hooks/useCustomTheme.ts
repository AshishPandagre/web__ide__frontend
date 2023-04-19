import { useEffect } from "react";
import { useMonaco } from "@monaco-editor/react";

export default function useCustomTheme() {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco?.editor.defineTheme("my-theme", {
        base: "vs-dark",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#121212",
        },
      });
      monaco?.editor.setTheme("my-theme");
    }
  }, [monaco]);
}
