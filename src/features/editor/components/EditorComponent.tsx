import { Editor, Monaco } from "@monaco-editor/react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Tabs from "../../tabs/components/Tabs";
import { updateCode } from "../../../redux/editor/fileCodeSlice";
import BlankEditor from "./BlankEditor";

const EditorComponent = () => {
  const dispatch = useAppDispatch();

  const active_tab_id = useAppSelector((state) => state.tabs.activeTab);
  const active_tab_code = useAppSelector((state) => state.fileCode)[active_tab_id];

  function editorMount(editor: any, monaco: Monaco) {
    editor.onDidChangeModelContent((e: any) => {
      const file_id = editor.getModel()?.uri.path.slice(1);
      const value = editor.getValue();
      dispatch(updateCode({ file_id, value }));
    });

    // to add an action to the editor..it's not specifically I need..but could be helpful
    // editor.addAction({
    //   id: 'my-unique-id',
    //   label: 'My Label!!!',
    //   keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10],
    //   contextMenuGroupId: '1_modification',
    //   contextMenuOrder: 2.5,
    //   run: function(ed) {
    //     console.log("i'm running => " + ed.getPosition());
    //   }
    // });

    // set a theme
    monaco?.editor.defineTheme("my-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: { "editor.background": "#121212" },
    });
    monaco?.editor.setTheme("my-theme");
  }

  return (
    <>
      <Tabs />
      {active_tab_id ? (
        <Editor
          onMount={editorMount}
          defaultLanguage="javascript"
          value={active_tab_code}
          options={{
            fontSize: 18,
            minimap: {
              enabled: false,
            },
          }}
          height="93%"
          path={active_tab_id}
        />
      ) : (
        <BlankEditor />
      )}
    </>
  );
};

export default EditorComponent;
